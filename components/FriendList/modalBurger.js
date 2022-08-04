import React, { useState } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import NickModal from "./nickModal";
import StrangerProfile from "../../screens/lookForFriends/strangerProfile"

export default function ModalBurger(props) {
  const [nickModal, setnickModal] = useState(false);
  const [goToProfile, setgoToProfile] = useState(false);

  const handlemodalNickOpen = () => {
    setnickModal(true);
  };

  const goTo = () => {
    setgoToProfile(true)
  }

  const handleDelete = () => {
    console.log(props.friendsList[props.index].email);
    props.owner.deleteFriend(props.friendsList[props.index].email)
      .then((_) => props.setFriendsList((prev) => prev.filter((_, index) => index != props.index)));
    setnickModal(false);
  };

  if (!props.visible) {
    return null;
  }

  return (
    <View>
      <View
        style={{
          position: "relative",
          width: 180,
          height: 180,
          zIndex: 2,
          backgroundColor: "white",
          top: 0,
          right: 15,
          borderWidth: 1,
          borderColor: "#c5c5c5",
          paddingLeft: 8,
          overflow: "visible",
        }}
      >
        <TouchableOpacity style={{ marginBottom: 10 }}>
          <Text
            onPress={() => props.setVisible(false)}
            style={{ fontSize: 20, color: "#bada55" }}
          >
            Zamknij
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlemodalNickOpen}
          style={{ marginBottom: 10 }}
        >
          <Text style={{ fontSize: 20 }}>Zmień nick</Text>
        </TouchableOpacity>
        <NickModal
          visible={nickModal}
          setVisible={setnickModal}
          owner={props.owner}
          friendsList={props.friendsList}
          setFriendsList={props.setFriendsList}
          index={props.index}
        />
        <TouchableOpacity onPress={handleDelete} style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 20 }}>Usuń ze znajomych</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => {
          props.navigation.navigate("StrangerProfile", {
            user: props.friendsList[props.index],
            owner: props.owner,
          });
        }}
        style={{ marginBottom: 10 }}
        >
          <Text style={{ fontSize: 20 }}>Zobacz profil</Text>
        </TouchableOpacity>
      </View>
      {/* <View>
        {goToProfile && (
          <StrangerProfile 
          route={{params: {
            user: props.friendsList[props.index],
            owner: props.owner
          }}}
          />
        )}
      </View> */}
    </View>
  );
}
