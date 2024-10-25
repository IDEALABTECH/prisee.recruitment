const jobs = [
    { title: "Web Developer", type: "fulltime", house: "Photon", description: "Xây dựng và tối ưu website" },
    { title: "Data Scientist", type: "internship", house: "Rise", description: "Phân tích dữ liệu và mô hình hoá" },
    // Thêm các công việc khác
];

function displayJobs(jobList) {
    const jobsContainer = document.getElementById("jobs");
    jobsContainer.innerHTML = "";
    jobList.forEach(job => {
        const jobElement = document.createElement("div");
        jobElement.classList.add("job");
        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p>Loại: ${job.type}</p>
            <p>Nhà: ${job.house}</p>
            <p>Mô tả: ${job.description}</p>
            <br/>
            <button onclick="openJobModal('${job.title}')">Xem Mô Tả</button>
            <button onclick="openApplyModal()">Ứng tuyển</button>
        `;
        jobsContainer.appendChild(jobElement);
    });
}

function filterJobs() {
    const search = document.getElementById("search").value.toLowerCase();
    const jobType = document.getElementById("jobType").value;
    const house = document.getElementById("house").value;

    const filteredJobs = jobs.filter(job => {
        return (jobType === "all" || job.type === jobType) &&
               (house === "all" || job.house === house) &&
               (job.title.toLowerCase().includes(search) || job.description.toLowerCase().includes(search));
    });
    displayJobs(filteredJobs);
}

function openJobModal(jobTitle) {
    document.getElementById("jobModal").style.display = "flex";
    document.getElementById("jobImage").src = `images/${jobTitle}.png`; // Dùng tên file ảnh tùy theo tiêu đề công việc
}

function closeJobModal() {
    document.getElementById("jobModal").style.display = "none";
}

function openApplyModal() {
    document.getElementById("applyModal").style.display = "flex";
}

function closeApplyModal() {
    document.getElementById("applyModal").style.display = "none";
}

document.getElementById("applyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Đơn ứng tuyển của bạn đã được gửi!");
    closeApplyModal();
});

window.onload = () => displayJobs(jobs);
