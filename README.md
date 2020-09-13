# API Project: Request Header Parser Microservice for freeCodeCamp

[See and Run on Repl.it](https://project-headerparser.mennovanbalen.repl.co)

[Run it](https://project-headerparser.mennovanbalen.repl.co)

### User stories:

1. I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.
<!--IP address: https://nodejs.org/dist/latest-v14.x/docs/api/os.html#os_os_networkinterfaces -->

#### Example usage:

- [base_url]/api/whoami

#### Example output:

- `{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`
