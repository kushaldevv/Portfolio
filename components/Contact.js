import {React, useState} from "react"
import emailjs from "emailjs-com"
import {Stack, Center, Input,useColorModeValue, Button, Textarea} from "@chakra-ui/react"

function Contact() {
  const [buttonText, setButtonText] = useState("Send");
  const [loading, setLoading] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    setLoading("true");
    emailjs.send("service_79nih4o", "template_7h4xuas", {
      from_name: e.target[0].value,
      message: e.target[2].value,
      reply_to: e.target[1].value,
    }, "")
    .then(() => {
      setLoading("");
      setButtonText("Sent!");
      e.target.reset();
    }, 
    () => {
      setLoading("");
      setButtonText("Error!");
      e.target.reset();
    });
  }
  
  return (
    <Center width={["90vw", "85vw", "80vw", "550px"]} className="contact-form" border="3px solid" borderColor={useColorModeValue("black", "white")}>
      <form onSubmit={sendEmail}>
        <Stack p="5" spacing= "5">
          <Input isRequired type="text" name = "from_name" width={["85vw", "80vw", "75vw", "525px"]} borderColor={useColorModeValue("black", "white")} border="solid 2px" _placeholder={{ opacity: 1}}  fontSize="xl" fontWeight="medium" placeholder="Name"/>
          <Input isRequired type="email" name = "reply_to" borderColor={useColorModeValue("black", "white")} border="solid 2px" _placeholder={{ opacity: 1}} fontSize="xl" fontWeight="medium" placeholder="Email"/>
          <Textarea isRequired name = "message" borderColor={useColorModeValue("black", "white")} border="solid 2px" _placeholder={{ opacity: 1}} height="275px" fontSize="xl" fontWeight="medium" placeholder="Message"/>
          <Button type = "submit" isLoading = {loading} loadingText="Sending" color={useColorModeValue("white", "black")} bg={useColorModeValue("black", "white")}>{buttonText}</Button>
        </Stack>
      </form>
    </Center>
  )
}
export default Contact
