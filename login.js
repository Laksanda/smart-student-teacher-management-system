// Shared helpers used across SSTMS frontend pages.

function initTabs(containerSelector){
  const tabs = document.querySelectorAll(containerSelector + ' .tab');
  const panels = document.querySelectorAll('.classTabs-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      panels.forEach(p => p.classList.add('hidden'));
      const panel = document.querySelector(tab.dataset.target);
      if(panel) panel.classList.remove('hidden');
    });
  });
}

function go(page){
  window.location.href = page;
}

// Simple front-end only "session" stored in memory for demo navigation.
const SSTMS = {
  user: { name: 'Anjali Perera', role: 'STUDENT' }
};

 document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // NOTE: replace with POST /api/v1/auth/login, store access token in memory
    // and refresh token in an HttpOnly cookie per the SRS JWT flow (Section 8).
    const role = document.getElementById('demoRole').value;
    if(role === 'student') go('student-dashboard.html');
    else if(role === 'teacher') go('teacher-dashboard.html');
    else go('admin-dashboard.html');
  });