<script lang="ts" setup>
import { useGlobalStore, type TabPane } from '@/store/useGlobalStore'
import { Snapshot, useWorkspeaceSnapshot } from '@/store/useWorkspeaceSnapshot'
import { uniqueId } from 'lodash-es'
import { computed } from 'vue'
import { ok } from 'vue3-ts-util'
import { FileDoneOutlined, LockOutlined, PlusOutlined, QuestionCircleOutlined } from '@/icon'
import { t } from '@/i18n'
import { cloneDeep } from 'lodash-es'
import { useImgSliStore } from '@/store/useImgSli'
import { addToExtraPath, onAliasExtraPathClick, onRemoveExtraPathClick } from './extraPathControlFunc'
import actionContextMenu from './actionContextMenu.vue'
import { ExtraPathType } from '@/api/db'
import { onMounted } from 'vue'
import { hasNewRelease, version, latestCommit } from '@/util/versionManager'
import { isTauri } from '@/util/env'
import { message } from 'ant-design-vue'
import { useSettingSync } from '@/util'

const global = useGlobalStore()
const imgsli = useImgSliStore()
const workspaceSnapshot = useWorkspeaceSnapshot()
const props = defineProps<{
  tabIdx: number; paneIdx: number, popAddPathModal?: {
    path: string
    type: ExtraPathType
  }
}>()

onMounted(() => {
  if (props.popAddPathModal) {
    addToExtraPath(props.popAddPathModal.type, props.popAddPathModal.path)
  }
})

const sync = useSettingSync()


const compCnMap: Partial<Record<TabPane['type'], string>> = {
  local: t('local'),
  'tag-search': t('imgSearch'),
  'fuzzy-search': t('fuzzy-search'),
  'batch-download': t('batchDownload') + ' / ' + t('archive'),
  'workspace-snapshot': t('WorkspaceSnapshot'),
  'random-image': t('randomImage'),
  'global-setting': t('globalSettings'),
}
type FileTransModeIn = 'preset' | ExtraPathType
const createPane = (type: TabPane['type'], path?: string, mode?: FileTransModeIn) => {
  let pane: TabPane
  switch (type) {
    case 'grid-view':
    case 'tag-search-matched-image-grid':
    case 'img-sli':
      return
    case 'global-setting':
    case 'tag-search':
    case 'batch-download':
    case 'workspace-snapshot':
    case 'fuzzy-search':
    case 'random-image':
    case 'empty':
      pane = { type, name: compCnMap[type]!, key: Date.now() + uniqueId() }
      break
    case 'local':
      pane = {
        type,
        name: compCnMap[type]!,
        key: Date.now() + uniqueId(),
        path,
        mode: mode === 'scanned-fixed' || mode === 'walk' ? mode : 'scanned'
      }
  }
  return pane
}
const openInCurrentTab = (type: TabPane['type'], path?: string, mode?: FileTransModeIn) => {
  const pane = createPane(type, path, mode)
  if (!pane) return
  const tab = global.tabList[props.tabIdx]
  tab.panes.splice(props.paneIdx, 1, pane)
  tab.key = pane.key
}

const openInNewTab = (type: TabPane['type'], path?: string, mode?: FileTransModeIn) => {
  const pane = createPane(type, path, mode)
  if (!pane) return
  const tab = global.tabList[props.tabIdx]
  tab.panes.push(pane)
}

const openOnTheRight = (type: TabPane['type'], path?: string, mode?: FileTransModeIn) => {
  const pane = createPane(type, path, mode)
  if (!pane) return
  let tab = global.tabList[props.tabIdx + 1]
  if (!tab) {
    tab = { panes: [], key: '', id: uniqueId() }
    global.tabList[props.tabIdx + 1] = tab
  }
  tab.panes.push(pane)
  tab.key = pane.key
}

const lastRecord = computed(() => global.tabListHistoryRecord?.[1])


const walkModeSupportedDir = computed(() =>
  global.quickMovePaths.filter(
    ({ key: k, types }) =>
      k === 'outdir_txt2img_samples' ||
      k === 'outdir_img2img_samples' ||
      k === 'outdir_txt2img_grids' ||
      k === 'outdir_img2img_grids' ||
      types.includes('walk')
  )
)
const canpreviewInNewWindow = window.parent !== window
const previewInNewWindow = () => window.parent.open('/infinite_image_browsing' + (window.parent.location.href.includes('theme=dark') ? '?__theme=dark' : ''))

const restoreRecord = () => {
  ok(lastRecord.value)
  global.tabList = cloneDeep(lastRecord.value.tabs)
}

const restoreWorkspaceSnapshot = (item: Snapshot) => {
  global.tabList = cloneDeep(item.tabs)
}

const machine = computed(() => {
  if (isTauri) return 'desktop application'
  if ( global.conf?.launch_mode === 'sd') return 'sd-webui extension'
  return 'standalone'
})

const modePrefix = (mode?: FileTransModeIn) => {
  if (!mode || mode === 'scanned') return ''
  if (mode === 'walk') return 'Walk: '
  return 'Fixed: '

}

const modes = computed(() => {
  const modes = [] as string[]
  if (global.conf?.enable_access_control) {
    modes.push('accessLimited')
  }
  if(global.conf?.is_readonly) {
    modes.push('readonly')
  }
  return modes.map(v => t(v)).join(' + ')
})

</script>
<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <h1>{{ $t('welcome') }}</h1>
        <!-- Compact Magic Switch with Welcome -->
        <div class="magic-switch-compact">
          <a-tooltip>
            <template #title>
              <div class="switch-tooltip">
                <div class="tooltip-title">{{ $t('magicSwitchTiktokView') }}</div>
                <div class="tooltip-status">{{ global.magicSwitchTiktokView ? $t('magicSwitchEnabled') : $t('magicSwitchDisabled') }}</div>
                <div class="tooltip-desc">{{ $t('magicSwitchDetailDesc') }}</div>
              </div>
            </template>
            <div class="ultra-cool-switch" :class="{ active: global.magicSwitchTiktokView }" @click="global.magicSwitchTiktokView = !global.magicSwitchTiktokView">
              <div class="switch-bg">
                <div class="switch-track"></div>
                <div class="switch-thumb" :class="{ active: global.magicSwitchTiktokView }">
                  <span class="switch-icon">{{ global.magicSwitchTiktokView ? '🎬' : '📁' }}</span>
                </div>
                <div class="switch-glow"></div>
              </div>
              <span class="switch-label">{{ $t('tiktokView') }}</span>
            </div>
          </a-tooltip>
        </div>
        
      </div>
      
      <div v-if="global.conf?.enable_access_control && global.dontShowAgain"
        style="margin-left: 16px;font-size: 1.5em;">
        <LockOutlined title="Access Control mode" style="vertical-align: text-bottom;" />
      </div>
      <div flex-placeholder />
      <a href="https://github.com/zanllp/sd-webui-infinite-image-browsing" target="_blank"
        class="quick-action">Github</a>
      <a href="https://github.com/zanllp/sd-webui-infinite-image-browsing/blob/main/.env.example" target="_blank"
        class="quick-action">{{ $t('privacyAndSecurity') }}</a>
      <a-badge :count="hasNewRelease ? 'new' : null" :offset="[2,0]" color="geekblue">
        <a href="https://github.com/zanllp/sd-webui-infinite-image-browsing/releases" target="_blank"
          class="quick-action">Releases</a>
      </a-badge>
      <a href="https://github.com/zanllp/sd-webui-infinite-image-browsing/wiki/Change-log" target="_blank"
        class="quick-action">{{ $t('changlog') }}</a>
      <a href="https://github.com/zanllp/sd-webui-infinite-image-browsing/issues/90" target="_blank"
        class="quick-action">{{ $t('faq') }}</a>
      <div class="quick-action" v-if="!isTauri">
        {{ $t('sync') }}  <a-tooltip :title="$t('syncDesc')">
          <QuestionCircleOutlined/>
        </a-tooltip>  :  <a-switch v-model:checked="sync" />
      </div>
      <a-radio-group v-model:value="global.darkModeControl" button-style="solid">
        <a-radio-button value="light">Light</a-radio-button>
        <a-radio-button value="auto">Auto</a-radio-button>
        <a-radio-button value="dark">Dark</a-radio-button>
      </a-radio-group>
    </div>
    <a-alert show-icon v-if="global.conf?.enable_access_control && !global.dontShowAgain">
      <template #message>
        <div class="access-mode-message">
          <div>
            {{ $t('accessControlModeTips') }}
          </div>
          <div flex-placeholder />
          <a @click.prevent="global.dontShowAgain = true">{{ $t('dontShowAgain') }}</a>
        </div>
      </template>
      <template #icon>
        <LockOutlined></LockOutlined>
      </template>
    </a-alert>
    <!--a-alert show-icon v-if="!global.dontShowAgainNewImgOpts">
      <template #message>
        <div class="access-mode-message">
          <div>
            {{ $t('majorUpdateCustomCellSizeTips') }}
          </div>
          <div flex-placeholder />
          <a @click.prevent="global.dontShowAgainNewImgOpts = true">{{ $t('dontShowAgain') }}</a>
        </div>
      </template>
    </a-alert-->
    <div class="content">
      <div class="feature-item">
        <h2>{{ $t('walkMode') }}</h2>
        <ul>
          <li @click="addToExtraPath('walk')" class="item">
            <span class="text line-clamp-1">
              <PlusOutlined /> {{ $t('add') }}
            </span>
          </li>
            
          <a-button v-if="global.showRandomImageInStartup" @click="openInCurrentTab('random-image')" type="primary" style="border-radius:100vw;margin-bottom: 8px;" ghost><span style="margin:0 6px;"><span style="margin-right: 8px;">🎲</span>{{ $t('tryMyLuck') }}</span></a-button>
          <actionContextMenu v-for="dir in walkModeSupportedDir" :key="dir.key"
            @open-in-new-tab="openInNewTab('local', dir.dir, 'walk')"
            @open-on-the-right="openOnTheRight('local', dir.dir, 'walk')">
            <li class="item rem" @click.prevent="openInCurrentTab('local', dir.dir, 'walk')">
              <span class="text line-clamp-2">{{ dir.zh }}</span>
              <template v-if="dir.can_delete">
                <AButton type="link" @click.stop="onAliasExtraPathClick(dir.dir)">{{ $t('alias') }}
                </AButton>
                <AButton type="link" @click.stop="onRemoveExtraPathClick(dir.dir, 'walk')">{{
        $t('remove') }}
                </AButton>
              </template>
            </li>
          </actionContextMenu>
        </ul>
      </div>
      <div class="feature-item" v-if="global.quickMovePaths.length">
        <h2>{{ $t('launchFromNormalAndFixed') }}</h2>
        <ul>
          <li @click="addToExtraPath('scanned-fixed')" class="item">
            <span class="text line-clamp-1">
              <PlusOutlined /> {{ $t('add') }}
            </span>
          </li>
          <template
            v-for="dir in global.quickMovePaths.filter(({ types: ts }) => ts.includes('cli_access_only') || ts.includes('preset') || ts.includes('scanned') || ts.includes('scanned-fixed')) "
            :key="dir.key">

            <actionContextMenu v-for="t in dir.types.filter(v => v !== 'walk')" :key="t"
              @open-in-new-tab="openInNewTab('local', dir.dir, t)"
              @open-on-the-right="openOnTheRight('local', dir.dir, t)">

              <li class="item rem" @click.prevent="openInCurrentTab('local', dir.dir, t)">
                <span class="text line-clamp-2"><span v-if="t == 'scanned-fixed'" class="fixed">Fixed</span>{{ dir.zh
                  }}</span>
                <template v-if="dir.can_delete && (t === 'scanned-fixed' || t === 'scanned')">
                  <AButton type="link" @click.stop="onAliasExtraPathClick(dir.dir)">{{ $t('alias') }}
                  </AButton>
                  <AButton type="link" @click.stop="onRemoveExtraPathClick(dir.dir, t)">{{ $t('remove') }}
                  </AButton>
                </template>
              </li>
            </actionContextMenu>
          </template>
        </ul>
      </div>
      <div class="feature-item">
        <h2>{{ $t('launch') }}</h2>
        <ul>
          <li v-for="comp in Object.keys(compCnMap) as TabPane['type'][]" :key="comp" class="item"
            @click.prevent="openInCurrentTab(comp)">
            <span class="text line-clamp-1">{{ compCnMap[comp] }}</span>
          </li>
          <li class="item" @click="imgsli.opened = true">
            <span class="text line-clamp-1">{{ $t('imgCompare') }}</span>
          </li>
          <li class="item" v-if="canpreviewInNewWindow" @click="previewInNewWindow">
            <span class="text line-clamp-1">{{ $t('openThisAppInNewWindow') }}</span>
          </li>
          <li class="item" v-if="lastRecord?.tabs.length" @click="restoreRecord">
            <span class="text line-clamp-1">{{ $t('restoreLastWorkspaceState') }}</span>
          </li>
          <li class="item" v-for="item in workspaceSnapshot.snapshots" :key="item.id" @click="restoreWorkspaceSnapshot(item)">
            <span class="text line-clamp-1">{{ $t('restoreWorkspaceSnapshot', [item.name]) }}</span>
          </li>
        </ul>
      </div>
      <div class="feature-item recent" v-if="global.recent.length">
        <div class="title">
          <h2>{{ $t('recent') }}</h2>
          <AButton @click="global.recent = []" type="link">{{ $t('clear') }}</AButton>
        </div>
        <ul>
          <li v-for="item in global.recent" :key="item.key" class="item"
            @click.prevent="openInCurrentTab('local', item.path, item.mode)">
            <FileDoneOutlined class="icon" />
            <span class="text line-clamp-1">{{modePrefix(item.mode)}}{{ global.getShortPath(item.path) }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="ver-info" @dblclick="message.info('Ciallo～(∠・ω< )⌒☆')">
      <div v-if="modes">
        Mode: {{ modes }}
      </div>
      <div>
        Version: {{ version.tag }} ({{machine}})
      </div>
      <div v-if="version.hash">
        Hash: {{ version.hash }}
      </div>
      <div v-if="latestCommit && version.hash && latestCommit.sha !== version.hash">
        Not the latest commit
      </div>
      <div v-if="latestCommit">
        Latest Commit: {{ latestCommit.sha }} (Updated at {{ latestCommit.commit.author?.date }})
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.access-mode-message {
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    margin-left: 16px;
  }
}

.container {
  padding: 20px;
  background-color: var(--zp-secondary-background);
  height: 100%;
  overflow: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.header h1 {
  font-size: 28px;
  font-weight: bold;
  color: var(--zp-primary);
  margin: 0;
}

.quick-action {
  margin-right: 16px;
  font-size: 14px;
  color: var(--zp-secondary);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 4px;

}

.quick-action a {
  text-decoration: none;
  color: var(--zp-secondary);
}

.quick-action a:hover {
  color: var(--zp-primary);
}

.content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));
  grid-gap: 20px;
  margin-top: 16px;
}

.feature-item {
  background-color: var(--zp-primary-background);
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 20px;

  ul {
    list-style: none;
    padding: 4px;
    max-height: 70vh;
    overflow-y: auto;
  }

  &.recent {
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      h2 {
        margin: 0;
      }
    }
  }

  .item {
    margin-bottom: 10px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    position: relative;

    &.rem {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:hover {
      background: var(--zp-secondary-background);
      border-radius: 4px;
      color: var(--primary-color);
      cursor: pointer;
    }

    .fixed {
      background: var(--primary-color);
      color: white;
      font-size: .8em;
      padding: 2px 4px;
      border-radius: 8px;
      margin-right: 4px;
    }
  }

  .icon {
    margin-right: 8px;
  }
}

.feature-item h2 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: var(--zp-primary);
}


.text {
  flex: 1;
  font-size: 16px;
  word-break: break-all;
}

.ver-info {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  color: var(--zp-secondary);
  gap: 16px;
  padding: 32px;
  flex-wrap: wrap;
  font-size: 0.9em;
}

/* Compact Magic Switch Styles */
.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.magic-switch-compact {
  flex-shrink: 0;
}

.ultra-cool-switch {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: var(--zp-primary-background);
  border: 1px solid transparent;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 12px;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    background: var(--zp-secondary-background);
    border-color: var(--primary-color);
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.1);
    
    &::before {
      left: 100%;
    }
  }
  
  &.active {
    background: linear-gradient(135deg, #ff8c42 0%, #ff6b35 50%, #ff4757 100%);
    border-color: #ff8c42;
    color: white;
    box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4), 0 4px 15px rgba(255, 140, 66, 0.3);
    
    &::before {
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    }
    
    .switch-label {
      color: white;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }
  }
}

.switch-bg {
  position: relative;
  width: 44px;
  height: 22px;
  border-radius: 11px;
  overflow: hidden;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05));
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.switch-track {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 42px;
  height: 20px;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.08));
  border-radius: 10px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.ultra-cool-switch.active .switch-track {
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.15));
  box-shadow: 0 0 10px rgba(255, 140, 66, 0.5);
}

.switch-thumb {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 20px;
  height: 20px;
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.active {
    transform: translateX(22px) rotate(360deg);
    background: linear-gradient(145deg, #fff, #ffeaa6);
    box-shadow: 0 4px 12px rgba(255, 140, 66, 0.4), 0 2px 6px rgba(255, 107, 53, 0.3);
  }
}

.switch-icon {
  font-size: 10px;
  transition: all 0.3s ease;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
}

.switch-label {
  color: var(--zp-primary);
  font-weight: 600;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

.switch-glow {
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background: linear-gradient(45deg, transparent, rgba(255, 140, 66, 0.2), transparent);
  border-radius: 12px;
  opacity: 0;
  transition: all 0.4s ease;
}

.ultra-cool-switch.active .switch-glow {
  opacity: 1;
  animation: glowPulse 2s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

.switch-tooltip {
  max-width: 240px;
  line-height: 1.5;
}

.tooltip-title {
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--primary-color);
}

.tooltip-status {
  margin-bottom: 6px;
  font-size: 13px;
}

.tooltip-desc {
  font-size: 12px;
  opacity: 0.8;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .header-left {
    gap: 12px;
  }
  
  .ultra-cool-switch {
    padding: 6px 10px;
    gap: 8px;
    font-size: 11px;
  }
  
  .switch-bg {
    width: 36px;
    height: 18px;
  }
  
  .switch-track {
    width: 34px;
    height: 16px;
  }
  
  .switch-thumb {
    width: 16px;
    height: 16px;
    
    &.active {
      transform: translateX(18px) rotate(360deg);
    }
  }
  
  .switch-icon {
    font-size: 8px;
  }
}
</style>
