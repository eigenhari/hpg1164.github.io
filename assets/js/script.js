'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  // Tab switching logic
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Add active class to clicked button
      btn.classList.add('active');

      // Show corresponding content
      const targetId = btn.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // Highlight header with black color on scroll
  const tabNav = document.querySelector('.tab-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      tabNav.classList.add('scrolled');
    } else {
      tabNav.classList.remove('scrolled');
    }
  });
});
