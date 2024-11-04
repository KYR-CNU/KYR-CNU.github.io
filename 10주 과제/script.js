function addReview() {
    const reviewText = document.getElementById("reviewInput").value;
    if (reviewText) {
        const reviewList = document.getElementById("reviewList");
        const reviewDiv = document.createElement("div");
        reviewDiv.classList.add("review");
        reviewDiv.textContent = reviewText;

        reviewList.appendChild(reviewDiv);
        document.getElementById("reviewInput").value = "";
    } else {
        alert("평가를 입력해주세요.");
    }
}