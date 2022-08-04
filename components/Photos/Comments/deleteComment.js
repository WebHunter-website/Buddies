import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import deleteCommentFetch from "../../myProfile/Fetch/deleteCommentFetch";

export default function DeleteComment(props) {
  const handleDelete = () => {
    props.setCommentData((prev) => {
      return prev.filter((e) => {
        return e.commentid != props.comment.commentid;
      });
    });
    deleteCommentFetch(props.comment.commentid);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleDelete}>
        <Image source={require("../../../src/img/delete.png")} style={{width: 20, height: 20, marginLeft: "auto", marginRight: 15}}/>
      </TouchableOpacity>
    </View>
  );
}
