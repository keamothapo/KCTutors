<script>
    // import { button } from '@melt-ui/svelte';
    import TopNavbar from '../components/TopNavBar.svelte';
    import Icon from '@iconify/svelte';
   
 </script>
  
  <div class="items-center bg-background h-screen main">
      <header>
        <TopNavbar />
      </header>
      <div class="flex">
        <div class="gap-3 items-center m-3 pt-12 pl-64">
          <button class="bg-highlight text-white flex py-2 px-4  rounded-full transition-all hover:bg-secondary ">
            <p class="rounded-full bg-alert mx-0.5 px-2">ALERT</p> 
             View our packages for discounted offers
          </button>
          <h2 class="text-white text-5xl">Online & <br> at-home <br> tutoring.</h2>
          <p class="text-highlight text-2xl">
            Our team of tutors is ready to <br> help you reach your academic <br>goals.
          </p>
          <button type="button" class="cursor-pointer flex w-full justify-center bg-highlight my-4 text-white py-1 px-4 rounded-full hover:bg-secondary transition-all">
            FIND OUT MORE <Icon icon="stash:arrow-reply-duotone" class="scale-x-[-1]" width="26" height="26" />
          </button>
        </div>
        <div class="avatar pr-6 mt-3 pt-24 h-3/12 w-3/12">
          <img src="/images/LandingAvatar.png" alt="Landing Avatar">
        </div>
      </div>
      
  </div>
  
  <style>

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .main
    {
      background-image: url('/images/Background.png');
      background-repeat: no-repeat;
      background-size: 100%;
    }

  </style>
  