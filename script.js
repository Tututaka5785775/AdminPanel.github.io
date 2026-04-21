const UI = {
    login: document.getElementById('login-screen'),
    panel: document.getElementById('admin-panel'),
    output: document.getElementById('terminal-output'),
    input: document.getElementById('terminal-input'),
    user: document.getElementById('username'),
    pass: document.getElementById('password'),
    err: document.getElementById('login-error')
};

const CREDENTIALS = {
    user: "TrustedInstaller027",
    pass: "keq+g$=%DbzhYJs6)&cXaud>!t*"
};

const commandDescriptions = {
    "/help": "Displays all 67 system commands.",
    "/clear": "Clears the terminal screen.",
    "/ip-config": "Shows local and gateway IP addresses.",
    "/ping": "Tests connection to the backbone server.",
    "/sys-info": "Displays OS architecture and kernel details.",
    "/net-stat": "Displays active network connections.",
    "/whoami": "Shows current privilege level.",
    "/process-list": "Lists all active system processes.",
    "/dir-tree": "Visualizes the current directory structure.",
    "/flush-dns": "Clears the system DNS cache.",
    "/mac-spoof": "Randomizes the MAC address for the session.",
    "/firewall-on": "Activates high-level packet filtering.",
    "/firewall-off": "Disables packet filtering (Caution).",
    "/user-list": "Lists all accounts on the local machine.",
    "/cpu-load": "Monitors real-time CPU cycle usage.",
    "/mem-usage": "Shows current RAM allocation and cache.",
    "/wifi-scan": "Lists available wireless access points.",
    "/task-sched": "Lists all scheduled system tasks.",
    "/gpu-render": "Tests graphical output buffer.",
    "/shutdown": "Safely terminates the admin session.",

    "/kill-all": "Terminates background tasks.", "/reg-backup": "Registry backup.", "/trace-route": "Traces packets.",
    "/fs-scan": "Scans file system.", "/chk-disk": "Disk sector check.", "/enc-data": "Encrypts data.",
    "/dec-data": "Decrypts data.", "/port-scan": "Scans local ports.", "/logs-view": "Displays event logs.",
    "/logs-clear": "Wipes trace logs.", "/priv-esc": "Elevates to SYSTEM.", "/uac-bypass": "UAC override.",
    "/proxy-init": "Initializes proxy tunnel.", "/vpn-connect": "Connects to VPN.", "/hash-gen": "Generates SHA-256.",
    "/dump-mem": "Dumps volatile memory.", "/reg-edit": "Registry editor.", "/srv-stop": "Stops a service.",
    "/srv-start": "Starts a service.", "/net-reset": "Resets network stack.", "/bt-pair": "Bluetooth handshake.",
    "/temp-clean": "Removes temp files.", "/app-kill": "Closes application.", "/file-hide": "Hides target file.",
    "/file-show": "Shows target file.", "/mbr-fix": "Repairs MBR.", "/bios-info": "Retrieves BIOS info.",
    "/env-var": "Displays env variables.", "/driver-list": "Lists loaded drivers.", "/usb-block": "Blocks USB data.",
    "/usb-allow": "Allows USB data.", "/rdp-enable": "Enables RDP.", "/rdp-disable": "Disables RDP.",
    "/uptime": "Shows system uptime.", "/shell-spawn": "Spawns sub-shell.", "/script-run": "Executes script.",
    "/update-chk": "Checks for patches.", "/vuln-scan": "Scans CVEs.", "/pass-audit": "Checks pass strength.",
    "/root-check": "Verifies root access.", "/bench-mark": "Runs performance test.", "/audio-test": "Tests audio.",
    "/thermal-chk": "Reads thermal sensors.", "/restart": "Reboots terminal.", "/force-exit": "Immediate exit.",
    "/status": "Shows Admin Panel health.", "/about": "Developer credits."
};


const cmdOutputs = {
    "/ip-config": () => `
Windows IP Configuration

Ethernet adapter Ethernet0:
   Connection-specific DNS Suffix  . : localdomain
   Link-local IPv6 Address . . . . . : fe80::1c2b:3f4a:5d6e:7h8i%12
   IPv4 Address. . . . . . . . . . . : 192.168.1.104
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 192.168.1.1

Wireless LAN adapter Wi-Fi:
   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . : `,
    
    "/ping": () => `
Pinging 8.8.8.8 with 32 bytes of data:
Reply from 8.8.8.8: bytes=32 time=${Math.floor(Math.random() * 20 + 10)}ms TTL=117
Reply from 8.8.8.8: bytes=32 time=${Math.floor(Math.random() * 20 + 10)}ms TTL=117
Reply from 8.8.8.8: bytes=32 time=${Math.floor(Math.random() * 20 + 10)}ms TTL=117
Reply from 8.8.8.8: bytes=32 time=${Math.floor(Math.random() * 20 + 10)}ms TTL=117

Ping statistics for 8.8.8.8:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 11ms, Maximum = 28ms, Average = 16ms`,

    "/sys-info": () => `
Host Name:                 TRUSTED-NODE-027
OS Name:                   Microsoft Windows 10 Enterprise
OS Version:                10.0.19045 N/A Build 19045
OS Manufacturer:           Microsoft Corporation
OS Configuration:          Standalone Workstation
OS Build Type:             Multiprocessor Free
Registered Owner:          TrustedInstaller027
Product ID:                00329-00000-00003-AA592
Original Install Date:     ${new Date().toLocaleDateString()}
System Boot Time:          ${new Date().toLocaleDateString()}, 08:14:32 AM
System Manufacturer:       Gigabyte Technology Co., Ltd.
System Model:              X570 AORUS ELITE
System Type:               x64-based PC
Processor(s):              1 Processor(s) Installed.
                           [01]: AMD64 Family 25 Model 33 Stepping 0 AuthenticAMD ~3701 Mhz
BIOS Version:              American Megatrends Inc. F30, 9/15/2020
Total Physical Memory:     32,692 MB
Available Physical Memory: 18,431 MB
Virtual Memory: Max Size:  37,556 MB
Virtual Memory: Available: 21,102 MB`,

    "/net-stat": () => `
Active Connections

  Proto  Local Address          Foreign Address        State
  TCP    192.168.1.104:139      0.0.0.0:0              LISTENING
  TCP    192.168.1.104:443      104.21.34.12:443       ESTABLISHED
  TCP    192.168.1.104:50231    52.113.194.132:443     ESTABLISHED
  TCP    192.168.1.104:50442    142.250.185.110:443    TIME_WAIT
  TCP    192.168.1.104:50450    192.168.1.255:137      UDP_LISTENING
  TCP    [::1]:49664            [::]:0                 LISTENING`,

    "/whoami": () => `NT AUTHORITY\\SYSTEM\nPrivilege Level: High (TrustedInstaller) \nSID: S-1-5-18`,

    "/process-list": () => `
Image Name                     PID Session Name        Session#    Mem Usage
========================= ======== ================ =========== ============
System Idle Process              0 Services                   0          8 K
System                           4 Services                   0      3,124 K
Registry                       144 Services                   0     65,212 K
smss.exe                       568 Services                   0      1,100 K
csrss.exe                      780 Services                   0      5,420 K
wininit.exe                    864 Services                   0      5,612 K
services.exe                   932 Services                   0     11,200 K
lsass.exe                      952 Services                   0     24,800 K
svchost.exe                   1128 Services                   0     32,456 K
explorer.exe                  3412 Console                    1    156,720 K
cmd.exe                       8912 Console                    1      4,120 K`,

    "/dir-tree": () => `
Folder PATH listing for volume SYSTEM
Volume serial number is 1C2B-3F4A
C:\\WINDOWS\\SYSTEM32
├───drivers
│   ├───etc
│   └───en-US
├───config
│   ├───systemprofile
│   └───RegBack
├───wbem
│   ├───AutoRecover
│   └───Logs
└───WindowsPowerShell
    └───v1.0`,

    "/flush-dns": () => `\nWindows IP Configuration\n\nSuccessfully flushed the DNS Resolver Cache.`,
    
    "/mac-spoof": () => {
        const hex = () => Math.floor(Math.random()*256).toString(16).padStart(2, '0').toUpperCase();
        return `Initializing MAC spoofing protocol...\nOriginal MAC: 00:1A:2B:3C:4D:5E\nNew MAC Address injected: ${hex()}:${hex()}:${hex()}:${hex()}:${hex()}:${hex()}\nStatus: SUCCESS - Network adapter restarted.`;
    },

    "/firewall-off": () => `\n[WARNING]  Firewall has been disabled for all profiles (Domain, Private, Public).\nSystem is currently vulnerable to incoming traffic.`,
    "/firewall-on": () => `\nFirewall state changed to: ON.\nDefault policy: Block Inbound, Allow Outbound.\nStrict packet filtering applied.`,
    
    "/user-list": () => `
User accounts for \\\\TRUSTED-NODE-027

-------------------------------------------------------------------------------
Administrator            DefaultAccount           Guest
TrustedInstaller027      WDAGUtilityAccount
The command completed successfully.`,

    "/cpu-load": () => `Analyzing CPU Threads...\nCore 0: ${Math.floor(Math.random()*30+10)}%\nCore 1: ${Math.floor(Math.random()*40+20)}%\nCore 2: ${Math.floor(Math.random()*15+5)}%\nCore 3: ${Math.floor(Math.random()*60+30)}%\nOverall Utilization: ${Math.floor(Math.random()*20+20)}% @ 3.82 GHz`,
    
    "/mem-usage": () => `Physical Memory (RAM) Analysis:\nTotal capacity: 253.7 GB\nIn use: 13.4 GB (0.6%)\nAvailable: 18.6 GB\nCommitted: 15.2/37.5 GB\nCached: 16.1 GB\nPaged pool: 854 MB\nNon-paged pool: 612 MB`,

    "/shutdown": () => `\n[SYSTEM] Initiating remote shutdown sequence...\nSaving active session states...\nClosing background daemons...\nGoodbye. (Refresh page to simulate restart)`,
    
    "/status": () => `Admin Panel Status: ONLINE\nDatabase Connectors: SECURE\nTerminal Latency: 4ms\nActive Tokens: 1 (TrustedInstaller027)\nEncryption: AES-256-GCM Active`,
    
    "/about": () => `Admin Panel v2.4 (Simulated Environment)nKernel Version: 10.0.19045.`
};

function attemptLogin() {
    if (UI.user.value === CREDENTIALS.user && UI.pass.value === CREDENTIALS.pass) {
        UI.login.style.display = "none";
        UI.panel.style.display = "flex";
        UI.input.focus();
    } else {
        UI.err.innerText = "ACCESS DENIED: INVALID CREDENTIALS OR SESSION EXPIRED";
    }
}


UI.input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const cmd = UI.input.value.trim().toLowerCase();
        processCommand(cmd);
        UI.input.value = ""; 
    }
});


UI.panel.addEventListener("click", () => {
    UI.input.focus();
});

function processCommand(val) {
    if (val === "") return;

    let out = `<div class="cmd-output"><span class="prompt">C:\\Windows\\System32></span>${val}</div>`;
    
    if (val === "/help") {
        out += `<div class="cmd-output" style="color:#88ff88;">\n==================================================\nSYSTEM COMMAND LIST\n==================================================\n`;
        Object.keys(commandDescriptions).forEach(key => {
          
            out += `${key.padEnd(18)} : ${commandDescriptions[key]}\n`;
        });
        out += `</div>`;
    } 
    else if (val === "/clear") {
        UI.output.innerHTML = "";
        return;
    } 
    else if (cmdOutputs[val]) {
        
        out += `<div class="cmd-output cmd-highlight">${cmdOutputs[val]()}</div>\n`;
    } 
    else if (commandDescriptions[val]) {

        out += `<div class="cmd-output">Executing routine for ${val}... \n[+] Loading modules...\n[+] Processing parameters...\nOperation completed successfully. (Simulated execution)</div>\n`;
    } 
    else {
        out += `<div class="cmd-output error">'${val}' is not recognized as an internal or external command,\noperable program or batch file. Type /help for list.</div>\n`;
    }

    UI.output.innerHTML += out;

    UI.output.scrollTop = UI.output.scrollHeight;
}