<script setup lang="ts">
import {defineComponent, ref, reactive, onMounted, onUnmounted} from 'vue';

// Template refs for accessing DOM elements
const usersMenuItemRef = ref<HTMLElement | null>(null);
const bookingsMenuItemRef = ref<HTMLElement | null>(null);

const usersExtraMenuRef = ref<HTMLElement | null>(null);
const bookingsExtraMenuRef = ref<HTMLElement | null>(null);

// Reactive state to control menu visibility
const isExtraMenuVisible = ref(false);

// Reactive style object for dynamic positioning
const extraMenuStyle = reactive({
  top: '0px',
  left: '0px',
});

let hideTimeout: ReturnType<typeof setTimeout> | null = null;

// Function to clear any pending hide timeout
const clearHideTimeout = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout);
    hideTimeout = null;
  }
};

// Handle mouse enter event on the main menu item or the extra menu itself
const handleMouseEnter = (event: MouseEvent) => {
  clearHideTimeout(); // Clear any pending hide timeout
  const eventTargetElement = event.target as HTMLElement;

  // If menu item reference is available
  // if (usersMenuItemRef.value || bookingsMenuItemRef.value) {
  if (eventTargetElement) {
    // Get the bounding rectangle of the menu item relative to the viewport
    // const rect = usersMenuItemRef.value.getBoundingClientRect();
    const rect = eventTargetElement.getBoundingClientRect();
    // const computedStyle = window.getComputedStyle(usersMenuItemRef.value);
    const computedStyle = window.getComputedStyle(eventTargetElement);

    // Set the top and left positions of the extra menu
    // rect.bottom gives the distance from the top of the viewport to the bottom of the menu item.
    // rect.left gives the distance from the left of the viewport to the left of the menu item.
    const paddingTop = parseInt(computedStyle.paddingTop);
    const borderTopWidth = parseFloat(computedStyle.borderTopWidth);
    // console.log({borderTopWidth, paddingTop});

    extraMenuStyle.top = `${rect.top + paddingTop}px`;
    extraMenuStyle.left = `${rect.left + 190}px`;
  }

  if (eventTargetElement.nextElementSibling.localName === 'div') {
    eventTargetElement.nextElementSibling.classList.add('is-visible');
  }

  isExtraMenuVisible.value = true;
};

// Handle mouse leave event from the main menu item or the extra menu
const handleMouseLeave = (event: MouseEvent) => {
  const eventTargetElement = event.target as HTMLElement;

  hideTimeout = setTimeout(() => {
    if (eventTargetElement.nextElementSibling.classList.contains('is-visible'))
      eventTargetElement.nextElementSibling.classList.remove('is-visible');

    if (eventTargetElement.classList.contains('is-visible'))
      eventTargetElement.classList.remove('is-visible');

    isExtraMenuVisible.value = false;
  }, 50);
};

// Function to re-position the menu if the window is resized or scrolled
const updateMenuPosition = () => {
  if (isExtraMenuVisible.value) {
    // Re-call handleMouseEnter to recalculate and set new positions
    handleMouseEnter();
  }
};

// Add event listeners for window resize and scroll when the component is mounted
onMounted(() => {
  window.addEventListener('resize', updateMenuPosition);
  window.addEventListener('scroll', updateMenuPosition);
});

// Clean up event listeners when the component is unmounted
onUnmounted(() => {
  window.removeEventListener('resize', updateMenuPosition);
  window.removeEventListener('scroll', updateMenuPosition);
  clearHideTimeout(); // Clear any pending timeout just in case
});
</script>

<template>
  <section id="side-bar">
    <section id="side-bar-top">
      <article class="menu-item" ref="usersMenuItemRef" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <img src="../../assets/side-menu/users-solid%201.png" alt="Users icon" /><span>Users</span>
      </article>
      <div
          ref="usersExtraMenuRef" class="extra-menu" @mouseenter="clearHideTimeout" @mouseleave="handleMouseLeave"
          :style="extraMenuStyle"
      >
        <h1>Users</h1>
        <ul>
          <li><router-link to="/users/staff">Staff</router-link></li>
          <li><router-link to="/users/students">Students</router-link></li>
          <li><router-link to="/users/parents">Parent</router-link></li>
          <li><router-link to="/users/tutors">Tutors</router-link></li>
          <li><router-link to="/users/facilitators">Facilitators</router-link></li>
        </ul>
      </div>
      <article class="menu-item" ref="bookingsMenuItemRef" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <img src="../../assets/side-menu/video-solid%202.png" alt="Bookings icon" /><span>Bookings</span>
      </article>
      <div
          ref="bookingsExtraMenuRef" class="extra-menu" @mouseenter="clearHideTimeout" @mouseleave="handleMouseLeave"
          :style="extraMenuStyle"
      >
        <h1>Bookings</h1>
        <ul>
          <li><router-link to="/bookings/lessons">Lessons</router-link></li>
          <li><router-link to="/bookings/free-meetings">Free Meetings</router-link></li>
          <li><router-link to="/bookings/requests">Requests</router-link></li>
          <li><router-link to="/bookings/jobs">Jobs</router-link></li>
        </ul>
      </div>
      <article class="menu-item"><img src="../../assets/side-menu/user-graduate-solid 1.png" alt="Academics icon" /><span>Academics</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/wallet-solid 1.png" alt="Finance icon" /><span>Finance</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/user-graduate-solid 1.png" alt="Academy icon" /><span>Academy</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/user-graduate-solid 1.png" alt="Schools icon" /><span>Schools</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/bullhorn-solid 1.png" alt="Marketing icon" /><span>Marketing</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/message-solid 1.png" alt="Messages icon" /><span>Messages</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/envelope-solid 2.png" alt="Emails icon" /><span>Emails</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/robot-solid 1.png" alt="Support icon" /><span>Support</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/paintbrush-solid 1.png" alt="Design icon" /><span>Design</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/star-solid 17.png" alt="Reviews icon" /><span>Reviews</span></article>
    </section>

    <section id="side-bar-bottom">
      <article class="menu-item"><img src="../../assets/side-menu/right-from-bracket-solid 1.png" alt="logout icon" /></article>
    </section>
  </section>
</template>

<style scoped lang="scss">
#side-bar {
  width: 172px;
  height: calc(100vh - 73px);
  background-color: #0C7334;
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .menu-item {
    margin-bottom: 34px;
    padding-left: 22px;
    display: flex;
    align-items: center;

    img {
      margin-right: 18px;
      width: 25px;
      height: 25px;
    }
  }

  #side-bar-top {
    .menu-item {
      cursor: default;
    }

    .menu-item:first-child {
      padding-top: 34px;
    }

    .extra-menu {
      position: absolute;
      width: 273px;
      height: fit-content;
      background-color: #FFF;
      color: #000;
      z-index: 30;
      //left: 190px;
      //top: 20px;

      /* Visibility and pointer events controlled by JavaScript and 'is-visible' class */
      opacity: 0;
      pointer-events: none; /* Prevents clicks when hidden */
      transition: opacity 300ms ease-out; /* transition-opacity duration-300 ease-out */

      ul {
        list-style: none;
      }

      h1, li {
        margin-left: 26px;
      }

      h1 {
        font-size: 20px;
        font-weight: 600;
        margin-top: 23px;
        margin-bottom: 20px;
      }

      li {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 20px;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
          font-weight: 600;
          transition: opacity 3s ease-in-out;
        }

        a {
          text-decoration: none;

          &:link, &:visited {
            color: #000;
          }
        }
      }

      &.is-visible {
        opacity: 1;
        pointer-events: auto; /* Allows clicks when visible */
      }
    }
  }

  #side-bar-bottom {
    .menu-item {
      cursor: pointer;
      justify-content: center;
    }
  }
}
</style>

<!--:class="{ 'is-visible': isExtraMenuVisible }"-->