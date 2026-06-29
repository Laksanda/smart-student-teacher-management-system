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


function teacherApprovals() {
    alert("Demo: would open pending teacher approvals list");
}

function courseManagement() {
    alert("Demo: would open course management");
}

function userManagement() {
    alert("Demo: would open all users list");
}

function auditLog() {
    alert("Demo: would open audit log");
}

function announcements() {
    alert("Demo: would open announcements editor");
}

function approveTeacher() {
    alert("Demo: PATCH /api/v1/admin/teachers/{id}/approve");
}

function rejectTeacher() {
    alert("Demo: would reject registration");
}