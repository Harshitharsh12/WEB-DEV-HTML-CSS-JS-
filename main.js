// start control coding:
var registerForm = document.querySelector("#register-form")
var allInput = registerForm.querySelectorAll("INPUT");
let addbtn = document.querySelector("#add-btn");
let modal = document.querySelector(".modal");
let closebtn = document.querySelector(".close-icon")
addbtn.addEventListener("click", () => {
    modal.classList.add("active");
})
closebtn.onclick = () => {
    modal.classList.remove("active")

    var i;
    for (i = 0; i < allInput.length; i++) {
        allInput[i].value = "";
    }
}
/* start all global variable*/
var userData = []
var profile_pic = document.querySelector("#profile-pic")
var uploadPic = document.querySelector("#upload-field")
var registerbtn = document.querySelector("#register-btn")
var updatebtn = document.querySelector("#update-btn")
var idEl = document.querySelector("#id")
var nameEl = document.querySelector("#name")
var l_nameEl = document.querySelector("#l-name")
var emailEl = document.querySelector("#email")
var officeEl = document.querySelector("#office-code")
var jobTitleEl = document.querySelector("#job")
var registerForm = document.querySelector("#register-form")
var imgUrl
/* end all global variable*/
// start registration coding:
registerbtn.onclick = (e) => {
    e.preventDefault()
    registrationData()
    getDataFromLocal()
    registerForm.reset('')
    closebtn.click();
}
if (localStorage.getItem("userData") != null) {
    userData = JSON.parse(localStorage.getItem("userData"))
    // console.log(userData)
}
function registrationData() {
    userData.push({
        // push the data in the JSON format:
        id: idEl.value,
        name: nameEl.value,
        l_name: l_nameEl.value,
        email: emailEl.value,
        office: officeEl.value,
        jobTitle: jobTitleEl.value,
        profilePic: imgUrl == undefined ? "images/contact-man.jpg" : imgUrl
    });
    var userString = JSON.stringify(userData)
    localStorage.setItem("userData", userString)
    swal("Good job!", "Registration successfull!", "success");
}
var tableData = document.querySelector("#table-data")
const getDataFromLocal = () => {
    tableData.innerHTML = ""
    userData.forEach((data, index) => {
        // + is used to prevent previous data
        tableData.innerHTML += `
        <tr index='${index}'>
        <td>${index + 1}</td>
        <td><img src="${data.profilePic}" width="40" ></td>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.l_name}</td>
        <td>${data.email}</td>
        <td>${data.office}</td>
        <td>${data.jobTitle}</td>
        <td> 
            <button class="edit-btn"><i class="fa fa-eye"></i></button>
            <button class="del-btn" style="background-color: #EE534F;"><i class="fa fa-trash"></i></button>
        </td>
        </tr>
        `
        // console.log(data)
    });
    // start delete coding:
    var i
    var allDelBtn = document.querySelectorAll(".del-btn")
    // console.log(allDelBtn)
    for (i = 0; i < allDelBtn.length; i++) {

        allDelBtn[i].onclick = function () {
            var tr = this.parentElement.parentElement;
            // console.log(tr)
            var id = tr.getAttribute("index");
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this data!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        userData.splice(id, 1);
                        localStorage.setItem("userData", JSON.stringify(userData));
                        tr.remove()
                        swal("Poof! Your data has been deleted!", {
                            icon: "success",
                        });
                    } else {
                        swal("Your data is safe!");
                    }
                });

        }
    }
    // start update coding:
    var allEditBtn = document.querySelectorAll(".edit-btn")
    // console.log(allEditBtn)
    for (i = 0; i < allEditBtn.length; i++) {
        allEditBtn[i].onclick = function () {
            // alert("O chacaha!!")
            var tr = this.parentElement.parentElement;
            var td = tr.getElementsByTagName("TD")
            // console.log(td)
            var index = tr.getAttribute("index");
            var imgTag = td[1].getElementsByTagName("IMG")
            var profilePic = imgTag[0].src;
            // alert(profile_pic)
            var id = td[2].innerHTML
            // alert(id)
            var name = td[3].innerHTML
            var l_name = td[4].innerHTML
            var email = td[5].innerHTML
            var officeCode = td[6].innerHTML
            var jobTitle = td[7].innerHTML
            // alert(jobTitle)
            addbtn.click();
            registerbtn.disabled = true;
            updatebtn.disabled = false;
            idEl.value = id
            nameEl.value = name
            l_nameEl.value = l_name
            emailEl.value = email
            officeEl.value = officeCode
            jobTitleEl.value = jobTitle
            profile_pic.src = profilePic;
            updatebtn.onclick = function (e) {
                // e.preventDefault()
                userData[index] = {
                    id: idEl.value,
                    name: nameEl.value,
                    l_name: l_nameEl.value,
                    email: emailEl.value,
                    office: officeEl.value,
                    jobTitle: jobTitleEl.value,
                    profilePic: uploadPic.value == "" ? profile_pic.src : imgUrl
                }
                localStorage.setItem("userData", JSON.stringify(userData))

            }

        }
    }
}
getDataFromLocal()

// image processing:
var profile_pic = document.querySelector("#profile-pic")
var upload_field = document.querySelector("#upload-field")
upload_field.onchange = () => {
    if (uploadPic.files[0].size < 1000000) {
        var fReader = new FileReader()
        fReader.onload = (e) => {
            imgUrl = e.target.result
            profile_pic.src = imgUrl
        }
        fReader.readAsDataURL(uploadPic.files[0])
    }
    else {
        // the file size should not be more than 1 MB
        alert("File Size is To Long!!")
        alert("Please choose the File below 1 MB")
    }
}
// start search coding:
var searchEl = document.querySelector("#empId")
searchEl.oninput = function () {
    searchFuc()
}
function searchFuc() {
    var tr = tableData.querySelectorAll("TR")
    // console.log(tr)
    var filter = searchEl.value.toLowerCase()
    var i;
    for (i = 0; i < tr.length; i++) {
        var td1 = tr[i].getElementsByTagName("TD")[2]
        var td2 = tr[i].getElementsByTagName("TD")[5]
        // alert(td.innerHTML)
        var id1 = td1.innerHTML
        var id2 = td2.innerHTML
        if (id1.toLowerCase().indexOf(filter) > -1 || id2.toLowerCase().indexOf(filter) > -1) {
            tr[i].style.display = ""
        } else {
            tr[i].style.display = "none"
        }
    }
}

// start clear all data:

var delAllBtn = document.querySelector("#del-all-btn")
var allDelBox = document.querySelector("#del-all-box")
delAllBtn.addEventListener('click', () => {
    // alert()
    if (allDelBox.checked == true) {
        // alert("success!!")
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    localStorage.removeItem("userData")
                    window.location = location.href
                    // userData.splice(id, 1);
                    // localStorage.setItem("userData", JSON.stringify(userData));
                    // tr.remove()
                    swal("Poof! Your data has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your data is safe!");
                }
            });

    }
    else {
        swal("Check The Box!", "Please check the box to delete data!", "warning")
    }
})