//burger menu
// JavaScript to toggle mobile menu visibility
  const burgerIcon = document.getElementById('burger-icon');
  const mobileMenu = document.getElementById('mobile-menu');

  burgerIcon.addEventListener('click', () => {
       mobileMenu.classList.toggle('hidden');
  });

  
// dropdown

      // JavaScript to toggle dropdown visibility
      const dropdownTrigger = document.querySelector('.relative');
  
      dropdownTrigger.addEventListener('mouseover', () => {
          document.getElementById('dropdown-menu').classList.remove('hidden');
          
      });
  
      dropdownTrigger.addEventListener('mouseout', () => {
          document.getElementById('dropdown-menu').classList.add('hidden');
      });
      

      document.addEventListener("DOMContentLoaded", function() {
        // Function to toggle visibility of dropdown menu
        function toggleDropdown(dropdownId) {
            var dropdown = document.getElementById(dropdownId);
            dropdown.classList.toggle("hidden");
        }
    
        // Toggle dropdown when clicking on the "รูปแบบผลงาน" menu item
        var mobileDropdownTrigger = document.querySelector(".relative > a");
        mobileDropdownTrigger.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior
            toggleDropdown("mobile-dropdown-menu");
        });
    
        // Close dropdown when clicking outside the dropdown or the trigger
        document.addEventListener("click", function(event) {
            var dropdownMenu = document.getElementById("mobile-dropdown-menu");
    
            if (
                !event.target.closest(".relative") &&
                !event.target.closest("#mobile-dropdown-menu")
            ) {
                dropdownMenu.classList.add("hidden");
            }
        });
    });
    




