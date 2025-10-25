<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'
import { animate, splitText, stagger } from 'animejs'

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
    title: 'Team Coach Roach',
    description: 'A web application with a landing page, user authentication, and a dashboard to manage client progress.',
    icon: 'i-lucide-chart-area',
    class: 'lg:col-span-2',
    image: {
      lightPath: '/projects/team-coach-roach.jpg',
      darkPath: '/projects/team-coach-roach.jpg',
      width: 363,
      height: 152
    },
    orientation: 'horizontal' as const,
    badges: ['Nuxt', 'Tailwind CSS', 'Supabase', 'Drizzle ORM', 'TypeScript']
  },
  {
    title: 'Upcoming: System Resource Monitor',
    description: 'A tool to monitor system resources and performance metrics in real-time using GoLang.',
    icon: 'i-lucide-monitor-cog',
    to: undefined, // To Do: Add project link
    variant: 'soft' as const,
    badges: ['GoLang']
  },
  {
    title: 'Filler Title',
    description: 'A brief description of the project goes here, highlighting its main features and technologies used.',
    icon: 'i-lucide-sun-moon',
    variant: 'soft' as const
  },
  {
    title: 'Bobby Geritas Coaching',
    description: 'A simple landing page for a coaching business built with Nuxt.js and Tailwind CSS, along with payment integration using Lemonsqueezy.',
    icon: 'i-lucide-biceps-flexed',
    image: {
      lightPath: '/projects/bobby-geritas-coaching.png',
      darkPath: '/projects/bobby-geritas-coaching.png',
      width: 362,
      height: 184
    },
    class: 'lg:col-span-2',
    orientation: 'horizontal' as const,
    reverse: true,
    badges: ['Nuxt', 'Tailwind CSS', 'Lemonsqueezy', 'TypeScript']
  }
])

const animatedWords = ref([
  'Nuxt',
  'TypeScript',
  'C#',
  'GitHub',
  'SQL',
  'Tailwind',
  'Vue.js',
  'Docker',
  'Git',
  'Cypress',
  'Postman'
])
const currentWordIndex = ref(0)

onMounted(() => {
  const animateWord = () => {
    const element = document.querySelector('.animeTitle')
    if (!element) return

    element.textContent = animatedWords.value[currentWordIndex.value]!

    const { words } = splitText('.animeTitle', { words: { wrap: 'clip' } })

    animate(words, {
      y: [
        { to: ['100%', '0%'] },
        { to: '-100%', delay: 2000, ease: 'in(3)' }
      ],
      duration: 1000,
      loop: true,
      delay: stagger(50),
      complete: () => {
        setTimeout(() => {
          currentWordIndex.value = (currentWordIndex.value + 1) % animatedWords.value.length
          animateWord()
        }, 2500)
      }
    })
  }

  animateWord()
})
</script>

<template>
  <div>
    <StarsBg />

    <UPageHero
      description="A professional portfolio showcasing my projects, skills, and experience as a developer."
      orientation="horizontal"
      :links="[{
        label: 'Get started',
        to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
        target: '_blank',
        trailingIcon: 'i-lucide-arrow-right',
        size: 'xl'
      }, {
        label: 'Take a look at my Docs!',
        to: '/docs',
        icon: 'i-lucide-files',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle'
      }]"
    >
      <template #title>
        <p>
          Full-Stack <span class="text-primary">Developer</span> with expertise in<br>
          <span class="text-primary animeTitle">{{ animatedWords[0] }}</span>
        </p>
      </template>

      <template #headline>
        <UBadge
          label="Hey, I'm Matthew 👋"
          variant="soft"
        />
      </template>
    </UPageHero>

    <UPageSection
      title="About Myself"
      description="I'm a passionate developer with experience in building modern web applications using Nuxt.js and other cutting-edge technologies. Here's a timeline of my professional journey so far."
      icon="i-lucide-user"
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
      />
    </UPageSection>

    <UPageSection
      title="Insight into my Skills"
      description="A comprehensive overview of my technical expertise and the areas I specialize in as a full-stack developer."
      :features="[{
        icon: 'i-lucide-rocket',
        title: 'Full-Stack Development',
        description: 'Building complete web applications from database design to user interface. Experienced in creating scalable solutions using modern frameworks like Nuxt.js, with a focus on clean architecture and maintainable code.'
      }, {
        icon: 'i-lucide-palette',
        title: 'UI/UX & Frontend',
        description: 'Crafting responsive and accessible user interfaces with Vue.js and Tailwind CSS. I prioritize user experience, ensuring designs are both beautiful and functional across all devices.'
      }, {
        icon: 'i-lucide-zap',
        title: 'Refactoring & Optimisation',
        description: 'Improving existing codebases through strategic refactoring and performance optimization. I identify bottlenecks, reduce technical debt, and implement best practices to enhance application speed and maintainability.'
      }, {
        icon: 'i-lucide-blocks',
        title: 'API & Backend',
        description: 'Designing and implementing RESTful APIs and backend services. Proficient in C# and Node.js, with experience in authentication, data validation, and integrating third-party services.'
      }, {
        icon: 'i-lucide-code-2',
        title: 'Databases & Dev Tools',
        description: 'Working with SQL databases and ORMs like Drizzle. Skilled in using modern development tools including Git, Docker, Cypress for testing, and CI/CD pipelines for automated deployments.'
      }, {
        icon: 'i-lucide-shield-check',
        title: 'Quality & Best Practices',
        description: 'Committed to writing clean, tested, and documented code. I follow industry standards, implement proper error handling, and ensure security best practices are maintained throughout the development lifecycle.'
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
        name="i-simple-icons-html5"
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
        name="i-simple-icons-css"
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
          spotlight
          spotlight-color="primary"
        >
          <UColorModeImage
            v-if="card.image"
            :light="card.image.lightPath"
            :dark="card.image.darkPath"
            :width="card.image.width"
            :height="card.image.height"
            :alt="card.title"
            loading="lazy"
            class="w-full"
          />
          <template #footer>
            <UBadge
              v-for="(badgeLabel, badgeIndex) in card.badges"
              :key="badgeIndex"
              variant="soft"
              color="primary"
              :label="badgeLabel"
              class="mr-2 mt-2"
            />
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Feel free to reach out!"
        description="I'm always open to connecting with fellow developers and tech enthusiasts."
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
