<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const { data: page } = await useAsyncData('index', () => queryCollection('landing').path('/').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png'
})

const timelineItems = ref<TimelineItem[]>([
  {
    date: 'September 21, 2020',
    title: 'Apprentice Developer',
    description: 'Joined as an apprentice developer. Gained experience in web development and software engineering.',
    icon: 'i-lucide-rocket'
  },
  {
    date: 'March 22, 2022',
    title: 'Junior Developer',
    description: 'Promoted to Junior Developer. Worked on various projects, improving coding skills and learning new technologies.',
    icon: 'i-lucide-palette'
  },
  {
    date: 'October 29, 2022',
    title: 'Mid-Level Developer',
    description: 'Took on more responsibilities, leading small projects and mentoring junior team members.',
    icon: 'i-lucide-zap'
  },
  {
    date: 'April 2026',
    title: 'Senior Developer',
    description: 'Led major projects, collaborated with cross-functional teams, and contributed to company strategy.',
    icon: 'i-lucide-check-circle'
  }
])

const projectCards = ref([
  {
    title: 'Theme',
    description: 'Learn how to customize Nuxt UI components using Tailwind CSS v4.',
    icon: 'i-lucide-swatch-book',
    to: '/docs/getting-started/theme/design-system',
    class: 'lg:col-span-2',
    image: {
      path: 'https://ui2.nuxt.com/illustrations/color-palette',
      width: 363,
      height: 152
    },
    orientation: 'horizontal' as const
  },
  {
    title: 'Fonts',
    description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
    icon: 'i-lucide-a-large-small',
    to: '/docs/getting-started/integrations/fonts',
    variant: 'soft' as const
  },
  {
    title: 'Color Mode',
    description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.',
    icon: 'i-lucide-sun-moon',
    to: '/docs/getting-started/integrations/color-mode',
    variant: 'soft' as const
  },
  {
    title: 'Icons',
    description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
    icon: 'i-lucide-smile',
    to: '/docs/getting-started/integrations/icons',
    image: {
      path: 'https://ui2.nuxt.com/illustrations/icon-library',
      width: 362,
      height: 184
    },
    class: 'lg:col-span-2',
    orientation: 'horizontal' as const,
    reverse: true
  }
])
</script>

<template>
  <div>
    <StarsBg />
    <UPageHero
      title="My Portfolio"
      description="A professional portfolio showcasing my projects, skills, and experience as a developer."
      :links="[{
        label: 'Get started',
        to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
        target: '_blank',
        trailingIcon: 'i-lucide-arrow-right',
        size: 'xl'
      }, {
        label: 'Use this template',
        to: 'https://github.com/nuxt-ui-templates/starter',
        target: '_blank',
        icon: 'i-simple-icons-github',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle'
      }]"
    />

    <UPageSection
      title="About Myself"
      description="I'm a passionate developer with experience in building modern web applications using Nuxt.js and other cutting-edge technologies. Here's a timeline of my professional journey so far."
      icon="i-lucide-rocket"
      orientation="horizontal"
      :links="[{
        label: 'Check out my CV',
        to: '/curriculum-vitae',
        color: 'neutral',
        variant: 'soft',
        trailingIcon: 'i-lucide-arrow-right'
      }]"
    >
      <UTimeline
        size="xl"
        :default-value="2"
        :items="timelineItems"
        class="w-full"
      />
    </UPageSection>

    <UPageSection
      id="features"
      title="Everything you need to build modern Nuxt apps"
      description="Start with a solid foundation. This template includes all the essentials for building production-ready applications with Nuxt UI's powerful component system."
      :features="[{
        icon: 'i-lucide-rocket',
        title: 'Full-Stack Development',
        description: 'Pre-configured with TypeScript, ESLint, Tailwind CSS, and all the best practices. Focus on building features, not setting up tooling.'
      }, {
        icon: 'i-lucide-palette',
        title: 'UI/UX & Frontend',
        description: 'Leveraging Nuxt UI\'s design system with automatic dark mode, consistent spacing, and polished components that look great out of the box.'
      }, {
        icon: 'i-lucide-zap',
        title: 'Refactoring & Optimisation',
        description: 'Optimized for performance with SSR/SSG support, automatic code splitting, and edge-ready deployment. Your users will love the speed.'
      }, {
        icon: 'i-lucide-blocks',
        title: 'API & Backend',
        description: 'Access Nuxt UI\'s comprehensive component library. From forms to navigation, everything is accessible, responsive, and customizable.'
      }, {
        icon: 'i-lucide-code-2',
        title: 'Databases & Dev Tools',
        description: 'Auto-imports, hot module replacement, and TypeScript support. Write less boilerplate and ship more features.'
      }, {
        icon: 'i-lucide-shield-check',
        title: 'Built for scale',
        description: 'Enterprise-ready architecture with proper error handling, SEO optimization, and security best practices built-in.'
      }]"
    />

    <UMarquee>
      <UIcon
        name="i-simple-icons-github"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-typescript"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-sqlite"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-nuxt"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-git"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-csharp"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-cypress"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-tailwindcss"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-docker"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-npm"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-postman"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-linear"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-pnpm"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-decapcms"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-netlify"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-vercel"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-coderabbit"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-githubactions"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-dependabot"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-eslint"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-supabase"
        class="size-10 shrink-0"
      />
      <UIcon
        name="i-simple-icons-nodedotjs"
        class="size-10 shrink-0"
      />
    </UMarquee>

    <UPageSection title="Projects">
      <UPageGrid>
        <UPageCard
          v-for="(card, index) in projectCards"
          :key="index"
          v-bind="card"
        >
          <UColorModeImage
            v-if="card.image"
            :light="`${card.image.path}-light.svg`"
            :dark="`${card.image.path}-dark.svg`"
            :width="card.image.width"
            :height="card.image.height"
            :alt="card.title"
            loading="lazy"
            class="w-full"
          />
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Ready to build your next Nuxt app?"
        description="Join thousands of developers building with Nuxt and Nuxt UI. Get this template and start shipping today."
        variant="subtle"
        :links="[{
          label: 'Start building',
          to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
          target: '_blank',
          trailingIcon: 'i-lucide-arrow-right',
          color: 'neutral'
        }, {
          label: 'View on GitHub',
          to: 'https://github.com/nuxt-ui-templates/starter',
          target: '_blank',
          icon: 'i-simple-icons-github',
          color: 'neutral',
          variant: 'outline'
        }]"
      />
    </UPageSection>
  </div>
</template>
