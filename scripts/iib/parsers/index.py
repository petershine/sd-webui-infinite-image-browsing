import os
from scripts.iib.parsers.comfyui import ComfyUIParser
from scripts.iib.parsers.sd_webui import SdWebUIParser
from scripts.iib.parsers.fooocus import FooocusParser
from scripts.iib.parsers.novelai import NovelAIParser
from scripts.iib.parsers.model import ImageGenerationInfo
from scripts.iib.parsers.stable_swarm_ui import StableSwarmUIParser
from scripts.iib.parsers.invoke_ai import InvokeAIParser
from scripts.iib.parsers.sd_webui_stealth import SdWebUIStealthParser
from scripts.iib.logger import logger
from PIL import Image
from scripts.iib.plugin import plugin_insts
import traceback


def parse_image_info(image_path: str) -> ImageGenerationInfo:
    enable_stealth_parser = os.getenv('IIB_ENABLE_SD_WEBUI_STEALTH_PARSER', 'false').lower() == 'true'
    parsers = plugin_insts + [
        ComfyUIParser,
        FooocusParser,
        NovelAIParser,
        InvokeAIParser,
        StableSwarmUIParser,
    ]
    
    if enable_stealth_parser:
        parsers.append(SdWebUIStealthParser)
    
    parsers.append(SdWebUIParser)
    with Image.open(image_path) as img:
        for parser in parsers:
            if parser.test(img, image_path):
                try:
                    return parser.parse(img, image_path)
                except Exception as e:
                    logger.error(e, stack_info=True)
                    print(e)
                    print(traceback.format_exc())
                    return ImageGenerationInfo()
        raise Exception("matched parser is not found")
