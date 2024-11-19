<script>
  // import { button } from '@melt-ui/svelte';
  import TopNavbar from '../components/TopNavBar.svelte';
  import Icon from '@iconify/svelte';
</script>

<div class="items-center bg-background h-screen main md:h-screen">
<header>
  <TopNavbar />
</header>
<div class="content flex md:flex-row md:p-8">
  <div class="gap-3 items-center md:pl-80 md:pt-5 md:text-left mb-8 md:mb-0 w-full md:w-1/2">
    <button class="bg-highlight text-white flex py-2 px-4 rounded-full transition-all hover:bg-secondary w-full md:w-full mb-4">
      <p class="rounded-full bg-alert mx-0.5 px-2">ALERT</p> 
      View our packages for discounted offers
    </button>
    <h2 class="text-white text-3xl md:text-5xl">Online & <br> at-home <br> tutoring.</h2>
    <p class="text-highlight text-lg md:text-2xl mt-4">
      Our team of tutors is ready to <br> help you reach your academic <br>goals.
    </p>
    <button type="button" class="cursor-pointer flex w-full justify-center bg-highlight my-4 text-white py-2 px-4 rounded-full hover:bg-secondary transition-all md:w-full">
      FIND OUT MORE <Icon icon="stash:arrow-reply-duotone" class="scale-x-[-1] ml-2" width="26" height="26" />
    </button>
  </div>
  <div class="avatar pr-6 mt-3 pt-12 h-48 w-48 md:h-3/12 md:w-3/12">
    <img src="/images/LandingAvatar.png" alt="Landing Avatar" class="object-contain">
  </div>
</div>
</div>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.main {
  background-image: url('/images/Background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 80% 10%;
}

.content {
  @apply flex flex-col md:flex-row items-center md:items-start;
}

@media (max-width: 768px) {
  .main {
    background-size: auto 100%;
    padding: 1rem;
  }
}
</style>
