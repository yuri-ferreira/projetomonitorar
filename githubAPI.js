fetch('https://api.github.com/users/yuri-ferreira/repos')
  .then(response => response.json())
  .then(repos => {
    const container = document.getElementById('repo-container');
    repos.forEach(repo => {
      const nome = repo.name;
      const url = repo.html_url;

      const repoDiv = document.createElement('div');
      repoDiv.classList.add('repo');

      repoDiv.innerHTML = `
        <a href="${url}" target="_blank">${nome}</a>
      `;
      container.appendChild(repoDiv);
    });
  })