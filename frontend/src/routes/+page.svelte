<script>
    // import { button } from '@melt-ui/svelte';
    import TopNavbar from '../components/TopNavBar.svelte';
    import Icon from '@iconify/svelte';
   
 </script>
  
  <div class=" items-center bg-background">
      <header>
        <TopNavbar />
      </header>
  
    <main class="flex bg-background justify-between center ml-48">
      <div class="main-graphic py-3 px-3 m-10">
        <!-- <img src="/graphics/Books.jpeg" alt="Books Icon"> -->
        <button class="bg-highlight text-white flex py-2 px-4  rounded-full transition-all hover:bg-secondary ">
          <p class="rounded-full bg-alert mx-2 px-2">ALERT</p> 
           View our packages for discounted offers
        </button>
        <h2 class="text-white text-5xl">Online & <br> at-home <br> tutoring.</h2>
        <p class="text-highlight text-2xl">
          Our team of tutors is ready to <br> help you reach your academic <br>goals.
        </p>
        <button type="button" class="cursor-pointer flex center bg-highlight my-4 text-white py-2 px-4 rounded-full hover:bg-secondary transition-all">
          FIND OUT MORE <Icon icon="stash:arrow-reply-duotone" class="scale-x-[-1]" width="26" height="26" />
        </button>
      </div>
      <div class="graphics">
        <!-- <img src="/path/to/computer-gears-icon.png" alt="Computer with Gears Icon">
        <img src="/path/to/maths-icon.png" alt="Maths Elements">
        <img src="/path/to/globe-icon.png" alt="Graduation Hat with Globe"> -->
      </div>
    </main>
  </div>
  
  <style>

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

  </style>
  