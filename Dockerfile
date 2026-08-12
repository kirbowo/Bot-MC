FROM ubuntu:latest
RUN apt-get update && apt-get install -y wget python3 ca-certificates
WORKDIR /app
RUN wget https://github.com/MCCTeam/Minecraft-Console-Client/releases/download/20260811-505/MinecraftClient-20260811-505-linux-x64 -O mcc
RUN chmod +x mcc
COPY MinecraftClient.ini .
ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=1
ENV PORT=3000
CMD python3 -m http.server $PORT & ./mcc
