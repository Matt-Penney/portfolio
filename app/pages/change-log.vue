<script setup lang="ts">
const { data: versions } = await useAsyncData('change-log', () => queryCollection('versions').all())
</script>

<template>
  <UPage>
    <UPageHero title="Changelog" />

    <UPageBody>
      <UChangelogVersions>
        <UChangelogVersion
          v-for="(version, index) in versions"
          :key="index"
          v-bind="version"
          :to="version.to"
        />
      </UChangelogVersions>
    </UPageBody>
  </UPage>
</template>
