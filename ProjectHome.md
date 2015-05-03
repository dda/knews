Korean news sites are VERY annoying: they have a gazillion ads, sliding banners and flashy unrelated content that distracts from the main purpose of the sites: reading the news... Some event prevent right-click operations. The user experience is so horrendous that for a while I quit reading them. Now, I'm back with a vengeance – and a script!

This is a work in progress – every day I stumble onto a site with yet another trick. But so far the results are pretty pleasant.

I minify the source with jsPacker – Rob Seiler's Perl port of Dean Edwards' packer http://dean.edwards.name/packer/
./jsPacker.pl -e62 -sf -i knews.js -o knews.min.js

jsPacker.pl is slightly modified to produce a minified script starting with "javascript:" and ending with "(null)" – so that it can be used as a bookmarklet.