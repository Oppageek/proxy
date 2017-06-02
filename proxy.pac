function FindProxyForURL(url, host)
{
  if (shExpMatch(url, "*8tracks.com*")) {
    return "SOCKS localhost:8080";
  }

  else {
    return "DIRECT";
  }
}
