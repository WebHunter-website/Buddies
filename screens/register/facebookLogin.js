import { WebView } from "react-native-webview";

export default function FacebookLoginModal(props) {
  return (
    props.visible && (
      <WebView
        scalesPageToFit={true}
        bounces={false}
        javaScriptEnabled
        style={{
          height: 500,
          width: 300,
        //   position: "absolute",
        //   top: 0,
        //   left: 0,
        }}
        source={{
          html: props.content,
        }}
        automaticallyAdjustContentInsets={false}
      />
    )
  );
}
