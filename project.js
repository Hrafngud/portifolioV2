document.addEventListener("DOMContentLoaded", function () {
    const project = JSON.parse(localStorage.getItem('currentProject'));
    if (project) {
        document.getElementById('project-title').innerText = project.title;
        document.getElementById('project-description').innerText = project.description;
        document.getElementById('project-video').src = project.videoUrl;
    }
});
