# Sheddit Post Action

This action tweets everytime you push to the repo!

## Inputs

### serverurl

**Required** Sheddit server URL.

### tweet

**Required** The tweet text

## Output

### message

Status message of the request made to the Sheddit server.

## Example

uses: actions/sheddit-action@v1
with:
    tweet:"We just pushed an awesome new feature! 🥳. Check it out https://github.com/rahulnpadalkar/Sheddit"
    serverurl:"http://address-of-sheddit-server:7009"