FROM ubuntu:18.04
MAINTAINER Leonardo Edgar

# Install core linux tools
RUN apt-get update && apt-get install -y --no-install-recommends \
	apt-utils lsb-release sudo unzip wget ssh vim curl ca-certificates gnupg\
	&& rm -rf /var/lib/apt/lists/* 
