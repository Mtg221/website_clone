function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('nav ul a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === id);
  });
  window.scrollTo(0, 0);
}

function filter(cat, el) {
  document.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('[id^="cat-"]').forEach(c => c.classList.add('hidden'));
  document.getElementById('cat-' + cat).classList.remove('hidden');
}

function handleSubmit(e) {
  e.preventDefault();
  const nom     = document.getElementById('nom').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!nom || !email || !message) return toast('Remplissez tous les champs.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast('Email invalide.');
  e.target.reset();
  toast('Message envoyé !');
}

function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}