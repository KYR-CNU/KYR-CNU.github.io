function checkAge() {
    const confirmAccess = confirm("19세 미만은 열람할 수 없습니다. (사유: 폭력성, 공포)\n계속하시겠습니까?");
    return confirmAccess;
}

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