provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "ja-chatGPT-clone" {
  ami           = "ami-0001b97ee748d91f6"
  instance_type = "t2.micro"
	key_name = "ja-chatGPT-clone"

  tags = {
    Name = "JAChatGPTClone"
  }
}


// try to see route with output
output "instance_id" {
  value = aws_instance.ja-chatGPT-clone.id
}

output "instance_public_ip" {
  value = aws_instance.ja-chatGPT-clone.public_ip
}
