Pd: OSC/NET arch test and distro builds for reasons of :

	1) Better Load Balance (pd memory/resource handling improves by 2x under OSCstream(tcp))


	2) Flexible architecture + an initial/load settings ability.

		- Quick generated results (reference to start "investigations")


	3) Interoperability (OSC udp/tcp/NETconn); a bridge between languages:

		- pd -> Processing (JAVA mode) // Processing (JAVA mode) -> pd 
				- pd [udpOSC (send) OK] 
				  Processing (JAVA mode)

				  pd [tcpOSC (send) FAIL]
				  Processing (JAVA mode) [FAIL* assumed - not tested due to time and tcp/SLIP fail in pd]

				  pd [udpOSC (send/recv) NA]
				  Processing (JAVA mode) [NA]

		- pd -> nodejs // nodejs -> pd
				- pd [OK (osc.js/osc-web:bridge.js) + NG(osc-emit)]
				- node.js [OK (osc.js/osc-web:bridge.js) + NG(osc-emit)]

		- pd -> Haskell/OpenAL // Haskell/OpenAL -> pd 
				- pd/Haskell(OpenAL) [FAIL: cabal OpenAL fails on install]

		- pd -> go(lang) // go(lang) -> pd 
				-> pd/go [NA]

		- pd -> JAVA // JAVA -> pd
				- pd/JAVA* (*see Processing (JAVA mode) [NA]

		- pd -> Arduino(Hal C)/pduino // Arduino(Hal C)/pduino
				- pd [NA]
				- Arduino(Hal C)/pduino [NA]

		- pd -> python/Magenta // Magenta/python -> pd 
				- pd [NA/FAIL - magenta fails to install due to many factors concerning pyWin10 env.]
				- Magenta/python [NA/FAIL ^^]

		- pd -> Erlang // Erlang -> pd
				- pd [NA]
				- Erlang [NA]

		- pd -> OM (OpenMusic) // OM (OpenMusic) -> pd 
				- pd [NA]
				- OpenMusic [NA] 

		- pd (C externals ?) [NA]
				
		- pd -> PERL / PERL -> pd [NA]