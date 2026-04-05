const modal = document.getElementById('modal');
const modalText = document.getElementById('modalText');
document.getElementById('modalOk').addEventListener('click', () => { /* handle ok */ hideModal(); });
document.getElementById('modalCancel').addEventListener('click', hideModal);

function showModal(message) {
  modalText.textContent = message;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  // move focus to close for keyboard users
  const closeBtn = document.getElementById('modalClose');
  if (closeBtn) closeBtn.focus();
}
function hideModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

// Wire modal controls: open button, close (x), overlay click, OK/Cancel, Escape key
(function wireModal() {
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('modalClose');
  const okBtn = document.getElementById('modalOk');
  const cancelBtn = document.getElementById('modalCancel');
  const overlay = modal ? modal.querySelector('.overlay') : null;

  if (openBtn) openBtn.addEventListener('click', () => showModal('This is a modal popup. Click outside, press Escape, or use the × to close.'));
  if (closeBtn) closeBtn.addEventListener('click', hideModal);
  if (okBtn) okBtn.addEventListener('click', () => { /* user confirmed */ hideModal(); });
  if (cancelBtn) cancelBtn.addEventListener('click', hideModal);
  if (overlay) overlay.addEventListener('click', (e) => {
    // click on overlay (outside dialog) closes the modal
    hideModal();
  });

  // close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      hideModal();
    }
  });
})();

// // tasks are objects: { text: string, done: boolean }
// let tasks = [];
// let currentFilter = 'all'; // 'all' | 'active' | 'done'

// function escapeHtml(str) {
//   return str.replace(/[&"'<>]/g, function (m) {
//     return ({
//       '&': '&amp;',
//       '"': '&quot;',
//       "'": '&#39;',
//       '<': '&lt;',
//       '>': '&gt;'
//     })[m];
//   });
// }

// function displayTasks() {
//   const list = document.getElementById('list');
//   let html = '';
//   for (let i = 0; i < tasks.length; i++) {
//     const t = tasks[i];
//     if (currentFilter === 'active' && t.done) continue;
//     if (currentFilter === 'done' && !t.done) continue;

//     const checked = t.done ? 'checked' : '';
//     const style = t.done ? 'text-decoration:line-through;color:#666;' : '';

//     html += `<li>`;
//     html += `<input type="checkbox" ${checked} onclick="toggleDone(${i})"> `;
//     html += `<span style="${style}">${escapeHtml(t.text)}</span> `;
//     html += `<button onclick="editTask(${i})">Edit</button> `;
//     html += `<button onclick="removeTask(${i})">x</button>`;
//     html += `</li>`;
//   }
//   list.innerHTML = html;
// }

// function addTaskOnEnter(event) {
//   if (event.key === 'Enter') addTask();
// }

// function addTask() {
//   const taskInput = document.getElementById('task');
//   const text = taskInput.value.trim();
//   if (text === '') return alert('Please enter a task.');
//   tasks.push({ text, done: false });
//   taskInput.value = '';
//   saveTasks();
//   displayTasks();
// }

// function removeTask(i) {
//   if (i < 0 || i >= tasks.length) return;
//   tasks.splice(i, 1);
//   saveTasks();
//   displayTasks();
// }

// function clearAll() {
//   tasks = [];
//   saveTasks();
//   displayTasks();
// }

// function toggleDone(i) {
//   if (i < 0 || i >= tasks.length) return;
//   tasks[i].done = !tasks[i].done;
//   saveTasks();
//   displayTasks();
// }

// function editTask(i) {
//   if (i < 0 || i >= tasks.length) return;
//   const newText = prompt('Edit task', tasks[i].text);
//   if (newText === null) return; // cancelled
//   const trimmed = newText.trim();
//   if (trimmed === '') return alert('Task cannot be empty.');
//   tasks[i].text = trimmed;
//   saveTasks();
//   displayTasks();
// }

// function saveTasks() {
//   localStorage.setItem('tasks', JSON.stringify(tasks));
//   displaysavemessage();
// }

// function loadTasks() {
//   const saved = localStorage.getItem('tasks');
//   if (saved !== null) {
//     try {
//       const parsed = JSON.parse(saved);
//       if (Array.isArray(parsed)) {
//         // normalize shape
//         tasks = parsed.map(item => {
//           if (typeof item === 'string') return { text: item, done: false };
//           return { text: String(item.text || ''), done: Boolean(item.done) };
//         });
//       }
//     } catch (e) {
//       // corrupted data: ignore
//       tasks = [];
//     }
//   }
// }

// function displaysavemessage() {
//   const message = document.getElementById('message');
//   if (!message) return;
//   message.style.display = 'block';
//   setTimeout(() => { message.style.display = 'none'; }, 1500);
// }

// function setFilter(f) {
//   currentFilter = f;
//   // visual feedback for active filter buttons
//   document.querySelectorAll('.filter-btn').forEach(btn => btn.style.fontWeight = 'normal');
//   const id = f === 'all' ? 'filter-all' : (f === 'active' ? 'filter-active' : 'filter-done');
//   const el = document.getElementById(id);
//   if (el) el.style.fontWeight = '700';
//   displayTasks();
// }

// function sortTasks() {
//   tasks.sort((a, b) => a.text.localeCompare(b.text, undefined, { sensitivity: 'base' }));
//   saveTasks();
//   displayTasks();
// }

// // Initialize on DOM ready
// document.addEventListener('DOMContentLoaded', () => {
//   loadTasks();
//   displayTasks();

//   const taskInput = document.getElementById('task');
//   if (taskInput) taskInput.addEventListener('keypress', addTaskOnEnter);

//   const addBtn = document.getElementById('add');
//   if (addBtn) addBtn.addEventListener('click', addTask);

//   const clearBtn = document.getElementById('clear');
//   if (clearBtn) clearBtn.addEventListener('click', clearAll);

//   const sortBtn = document.getElementById('sort');
//   if (sortBtn) sortBtn.addEventListener('click', sortTasks);

//   document.getElementById('filter-all').addEventListener('click', () => setFilter('all'));
//   document.getElementById('filter-active').addEventListener('click', () => setFilter('active'));
//   document.getElementById('filter-done').addEventListener('click', () => setFilter('done'));

//   // default filter button visual
//   setFilter('all');
// });

Swal.fire('Hello world');
Swal.fire({
  title: 'Are you sure?',
  showCancelButton: true,
  confirmButtonText: 'Yes'
}).then(result => {
  if (result.isConfirmed) { /* ... */ }
});
