FROM ubuntu:latest
RUN apt-get update && apt-get install -y wget ca-certificates ttyd
WORKDIR /app
RUN wget https://github.com/MCCTeam/Minecraft-Console-Client/releases/download/20260811-505/MinecraftClient-20260811-505-linux-x64 -O mcc
RUN chmod +x mcc
COPY MinecraftClient.ini .
ENV PORT=3000
CMD ttyd -p $PORT ./mcc
