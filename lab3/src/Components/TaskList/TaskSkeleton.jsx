import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={500}
    height={111}
    viewBox="0 0 388 111"
    backgroundColor="#D9D9D9"
    foregroundColor="#aaa"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="388" height="111" />
  </ContentLoader>
)

export default MyLoader