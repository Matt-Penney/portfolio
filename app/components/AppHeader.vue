<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { header } = useAppConfig()
</script>

<template>
  <UHeader>
    <NuxtLink
      to="/docs"
      class="ml-6 text-sm font-medium text-muted hover:text-primary transition"
    >
      Documentation
    </NuxtLink>
    <NuxtLink
      to="/change-log"
      class="ml-6 text-sm font-medium text-muted hover:text-primary transition"
    >
      Change Log
    </NuxtLink>
    <NuxtLink
      to="/curriculum-vitae"
      class="ml-6 text-sm font-medium text-muted hover:text-primary transition"
    >
      Curriculum Vitae
    </NuxtLink>

    <template
      v-if="header?.logo?.dark || header?.logo?.light || header?.title"
      #title
    >
      <UColorModeImage
        v-if="header?.logo?.dark || header?.logo?.light"
        :light="header?.logo?.light!"
        :dark="header?.logo?.dark!"
        :alt="header?.logo?.alt"
        class="h-6 w-auto shrink-0"
      />

      <span v-else-if="header?.title">
        {{ header.title }}
      </span>
    </template>

    <template
      v-else
      #left
    >
      <NuxtLink :to="header?.to || '/'">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <template #body>
      <UContentNavigation
        highlight
        :navigation="navigation"
      />
    </template>

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
        class=""
      />

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UHeader>
</template>
