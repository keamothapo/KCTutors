<script>
    import Icon from '@iconify/svelte';
     function login()
     {
        console.log ("login button clicked");
     }
</script>
  
  <nav class="bg-highlight w-screen flex justify-between items-center">
      <img src="/images/KC_Logo_Black_Bolded.png" class="h-22 w-32" alt="KC Tutoring Services Logo">
    <div class="flex items-center gap-4">
      <button class="border-none text-primary py-2 px-2 rounded hover:bg-secondary" on:click={login()}>
        <Icon icon="mdi-light:login" width="3rem" height="3rem"/>
      </button>
      <button class="text-primary py-2 px-2 rounded hover:bg-secondary">
        <Icon icon="mdi-light:menu" width="3rem" height="3rem"/>
      </button>
    </div>
  </nav>
  
  <style> 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer base {
    @font-face {
      font-family: 'The Seasons';
      src: url(/fonts/Fontspring-DEMO-theseasons-bd.otf) format('otf');
    }
  }
  </style>
  