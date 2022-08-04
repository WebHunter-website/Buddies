import { url, port } from "../../../src/helpers";

export default function filterFriendsList(
  email,
  sex,
  status,
  distanceFilterFrom,
  distanceFilterTo,
  minAge,
  maxAge,
  location
) {
  return fetch(`${url}:${port.rest}/api/filterListLookFriends`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      filterBySex: sex != null,
      sex: sex,
      filterByStatus: status.length > 0,
      status: status,
      filterByDistance: !isNaN(distanceFilterFrom) && !isNaN(distanceFilterTo),
      distanceFilterFrom: distanceFilterFrom,
      distanceFilterTo: distanceFilterTo,
      minAge: minAge,
      maxAge: maxAge,
      location: location
    }),
  }).then((res) => res.json());
}

// export default function filterFriendsList(owner, friendsData, fromValueAge, toValueAge, sex, distanceTo, distanceFrom, status){
//     let tempFriendList = [...friendsData]

//     tempFriendList = filerFriendsByAge(tempFriendList, fromValueAge, toValueAge)

//     if (sex != null) {
//         tempFriendList = filterFriendsBySex(tempFriendList, sex)
//     }

//     if (distanceTo != null && distanceFrom != null) {
//         tempFriendList = filerFriendsByDistance(owner, tempFriendList, distanceTo, distanceFrom)
//     }

//     if (status != null) {
//         tempFriendList = filerFriendsByStatus(tempFriendList, status)
//     }

//     return tempFriendList;
// }

// function filerFriendsByAge(friendsData, fromValueAge, toValueAge) {
//     return(
//         friendsData.filter((friendData) => {
//             return(
//                 friendData.age >= fromValueAge && friendData.age <= toValueAge
//             )
//         })
//     )
// }

// function filterFriendsBySex(friendsData, sex) {
//     return(
//         friendsData.filter((friendData) => {
//             return(
//                 friendData.sex === sex
//             )
//         })
//     )
// }

// function filerFriendsByDistance(owner, friendsData, distanceTo, distanceFrom) {
//     return (
//         friendsData.filter((friendData) => {
//             const distance = owner.getDistanceToPoint(friendData.location.x, friendData.location.y)
//             return(
//                 distance >= distanceFrom && distance <= distanceTo
//             )
//         })
//     )
// }

// function filterFriendsByStatus(friendsData, status) {
//     return(
//         friendsData.filter((friendData) => {
//             return(
//                 friendData.status === true
//             )
//         })
//     )
// }
