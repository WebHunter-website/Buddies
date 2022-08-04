export default function getAge(dateString) {
    var today = new Date(Date.now());
    // console.log(today);/
    var birthDate = new Date(dateString);
    // console.log("birth" + birthDatey);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
