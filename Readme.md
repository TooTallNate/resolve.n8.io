# resolve.n8.io

Resolves a hostname.

> **Example**: https://resolve.n8.io/api/example.com

### Usage with `ddclient`

Google Domains does not support `ALIAS` DNS records, so here is a `ddclient`
configuration that acts similar to how alias records work (periodically updating
the `A` record):

```
protocol=dyndns2
use=web, web=https://resolve.n8.io/api/cname.vercel-dns.com
server=domains.google.com
ssl=yes
login='abcdef'
password='uvwxyz'
tootallnate.net
```
