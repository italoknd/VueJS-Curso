<template>
  <footer class="py-32 grid grid-cols-3 bg-slate-800 w-screen">
    <div class=" mx-auto col-span-3 lg:col-span-1" v-for="col in linkColumns" :key="col">
      <div class="flex flex-col mb-4" v-for="section in col" :key="section">
        <h3 class="font-medium uppercase opacity-50">{{ section.title }}</h3>
        <a
          class="hover:underline mt-4"
          :href="link.to"
          v-for="link in section.links"
          :key="link"
          >{{ link.text }}</a
        >
      </div>
    </div>
  </footer>
</template>

<script setup>
const linkColumns = [
  //column1
  [
    {
      title: "LearnVue",
      links: [
        { to: "/#", text: "About" },
        { to: "/#", text: "Pricing" }
      ]
    }
  ],
  //column2
  [
    {
      title: "Learn",
      links: [
        {
          to: "/#",
          text: "Vue 3"
        },
        {
          to: "/#",
          text: "Vue 2"
        },
        {
          to: "/#",
          text: "Nuxt"
        },
        {
          to: "/#",
          text: "React"
        }
      ]
    },
    {
      title: "Business",
      links: [
        {
          to: "/#",
          text: "Sponsors"
        },
        {
          to: "/#",
          text: "Partners"
        }
      ]
    }
  ],
  //column3
  [
    {
      title: "Contact",

      links: [
        {
          to: "/#",
          text: "Youtube"
        },
        {
          to: "/#",
          text: "Twitter"
        },
        {
          to: "/#",
          text: "Instagram"
        },
        {
          to: "/#",
          text: "Gmail"
        }
      ]
    }
  ]
];
</script>