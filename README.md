# Microtik Google Address List Generator

This repository's `command.txt` file contains a terminal
command for Microtik's RouterOS that creates an address list named "google" in the firewall.
This address list includes all publicly known IP addresses that belong to Google, except the addresses of Google's DNS servers.
This command can be updated by running the script also provided in this
repository. The script works by downloading a list of IP
addresses provided by Google.

## Goal

My original goal was to block YouTube access on a specific device on my network. Having found
no effective way to do it, I finally settled for blocking all Google services. This solution is obviously not viable for everyone,
but it works for me as no other app requiring access to Google
services is installed on the device.
Having a list of Google addresses allowed me to block access to
these addresses from a specific device by adding a firewall rule
using that list.

## Using the Update Script

### Prerequisites

* [Node.js](https://nodejs.org/) 16.14 or later (might work on older versions)
* [Yarn](https://yarnpkg.com/)

### Usage

```bash
git clone https://github.com/plbrault/microtik-google-address-list.git
cd microtik-google-address-list
yarn && yarn update-command
```

## License

Copyright © 2022 Pier-Luc Brault <pier-luc@brault.me>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
