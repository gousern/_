function FindProxyForURL(url, host) {
  // Setup a SOCKS proxy on port 1280.
  proxy = "SOCKS5 127.0.0.1:2341; SOCKS 127.0.0.1:2341"

  // Log to `chrome://net-internals/#events` for debugging.
  alert("url: " + url + ", host: " + host)

  // Setup proxy filters.
  // - Use `host` for IP addresses and domain names.
  // - Use `url` for more control over the entire URL (i.e. sub paths).
  // - Protip: Use the above debugging log to determine the `url` and `host` for
  //   a given page.
  // - Protip 2: If you add an entry for your server to `/etc/hosts` in the form of
  //   `IP_address domain_name_url alias`, the `host` can be matched to the `alias`.
  if (shExpMatch(host, "111.111.111.*") ||  // match IP address
      shExpMatch(host, "server*")) {  // match `server1`, `server23`, etc.
    // Log to `chrome://net-internals/#events` for debugging.
    alert(host + " passed!")
    // Route through server.
    return DIRECT;
  }

  // Route everything else directly!
  return proxy;
}

