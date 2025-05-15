

// Contract address - Replace with your deployed contract address
const contractAddress = '0xD6cf0DcbD50EE62F2D300CE66094011Bd2E699fE'; // 部署合约后填写合约地址 | Fill this after contract deployment

const contractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_specialty",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_workingDays",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_qualification",
				"type": "string"
			}
		],
		"name": "addDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_patientAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_medication",
				"type": "string"
			}
		],
		"name": "addMedication",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_patientAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			}
		],
		"name": "addPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			}
		],
		"name": "bookAppointment",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "appointmentId",
				"type": "uint256"
			}
		],
		"name": "AppointmentBooked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "appointmentId",
				"type": "uint256"
			}
		],
		"name": "AppointmentCancelled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "appointmentId",
				"type": "uint256"
			}
		],
		"name": "AppointmentCompleted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_patientAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_appointmentId",
				"type": "uint256"
			}
		],
		"name": "cancelAppointment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_patientAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_appointmentId",
				"type": "uint256"
			}
		],
		"name": "completeAppointment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "doctorAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "specialty",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "workingDays",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "qualification",
				"type": "string"
			}
		],
		"name": "DoctorAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "rating",
				"type": "uint8"
			}
		],
		"name": "DoctorRated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "doctorAddress",
				"type": "address"
			}
		],
		"name": "DoctorRevoked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "medication",
				"type": "string"
			}
		],
		"name": "MedicationAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "gender",
				"type": "string"
			}
		],
		"name": "PatientAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_appointmentId",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "_rating",
				"type": "uint8"
			}
		],
		"name": "rateDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			}
		],
		"name": "registerAsSelfPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "revokeDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "setAppointmentFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "appointmentCountPerDay",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "appointmentExists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "director",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "doctorAppointments",
		"outputs": [
			{
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "completed",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "appointmentId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "doctorList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "doctors",
		"outputs": [
			{
				"internalType": "address",
				"name": "doctorAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "specialty",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "workingDays",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "qualification",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "appointmentFee",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "listIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalRating",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ratingCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllDoctors",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDoctorAppointments",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "doctor",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "fee",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "completed",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "appointmentId",
						"type": "uint256"
					}
				],
				"internalType": "struct HospitalManagement.Appointment[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "getDoctorDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "specialty",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "workingDays",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "qualification",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "appointmentFee",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "getDoctorRating",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "averageRating",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ratingCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "start",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "pageSize",
				"type": "uint256"
			}
		],
		"name": "getDoctorsPage",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getHospitalStats",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "doctorCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "patientCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "appointmentCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMyAppointments",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "patient",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "doctor",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "fee",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "completed",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "appointmentId",
						"type": "uint256"
					}
				],
				"internalType": "struct HospitalManagement.Appointment[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMyMedicalRecord",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "medicationRecord",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_patientAddress",
				"type": "address"
			}
		],
		"name": "getPatientDetails",
		"outputs": [
			{
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "medicationRecord",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "hasRatedAppointment",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			}
		],
		"name": "isDoctorAvailable",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			}
		],
		"name": "isDoctorWorkingOnDate",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patientAppointments",
		"outputs": [
			{
				"internalType": "address",
				"name": "patient",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "completed",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "appointmentId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patientList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "patients",
		"outputs": [
			{
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "medicationRecord",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "verifyDoctor",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isDoctor",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "specialty",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "qualification",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "appointmentFee",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


// Global variables
let web3;
let contract;
let accounts;
let currentAccount;
let userRole = null;
let toast;
let toastBootstrap;
let doctorDetailsModal;
let appointmentDetailsModal;

// Initialize the application when the window loads
window.addEventListener('load', async () => {
    // Initialize Bootstrap toast and modals
    toast = document.getElementById('toast');
    toastBootstrap = new bootstrap.Toast(toast);
    doctorDetailsModal = new bootstrap.Modal(document.getElementById('doctorDetailsModal'));
    appointmentDetailsModal = new bootstrap.Modal(document.getElementById('appointmentDetailsModal'));
    
    // Set up event listeners
    document.getElementById('connect-wallet').addEventListener('click', connectWallet);
    document.getElementById('director-btn').addEventListener('click', () => selectRole('director'));
    document.getElementById('doctor-btn').addEventListener('click', () => selectRole('doctor'));
    document.getElementById('patient-btn').addEventListener('click', () => selectRole('patient'));
    
    // Set up form event listeners
    setupFormListeners();
    
    // Check if MetaMask is installed
    if (window.ethereum) {
        try {
            // Request account access if needed
            web3 = new Web3(window.ethereum);
            // Check if already connected
            accounts = await web3.eth.getAccounts();
            if (accounts.length > 0) {
                currentAccount = accounts[0];
                onWalletConnected();
            }
        } catch (error) {
            showToast('错误 | Error', '无法连接到区块链网络 | Unable to connect to blockchain network');
            console.error(error);
        }
    } else {
        showToast('警告 | Warning', '请安装 MetaMask 钱包 | Please install MetaMask wallet');
    }
});

// Connect wallet function
async function connectWallet() {
    if (window.ethereum) {
        try {
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            currentAccount = accounts[0];
            onWalletConnected();
        } catch (error) {
            showToast('错误 | Error', '连接钱包失败 | Failed to connect wallet');
            console.error(error);
        }
    } else {
        showToast('警告 | Warning', '请安装 MetaMask 钱包 | Please install MetaMask wallet');
    }
}

// Function called after wallet is connected
async function onWalletConnected() {
    try {
        // Initialize contract
        contract = new web3.eth.Contract(contractABI, contractAddress);
        
        // Update UI
        document.getElementById('wallet-status').innerHTML = `
            <span>钱包已连接 | Wallet connected</span><br>
            <small>${currentAccount}</small>
        `;
        document.getElementById('wallet-status').classList.remove('alert-warning');
        document.getElementById('wallet-status').classList.add('alert-success');
        
        // Hide connect button
        document.getElementById('connect-wallet').style.display = 'none';
        
        // Listen for account changes
        window.ethereum.on('accountsChanged', function (accounts) {
            currentAccount = accounts[0];
            resetUI();
            showToast('通知 | Notification', '钱包账户已更改 | Wallet account changed');
        });
        
        // Check if user is a director
        const director = await contract.methods.director().call();
        if (currentAccount.toLowerCase() === director.toLowerCase()) {
            selectRole('director');
        }
    } catch (error) {
        showToast('错误 | Error', '连接到合约失败 | Failed to connect to contract');
        console.error(error);
    }
}

// Set up all form event listeners
function setupFormListeners() {
    // Director forms
    document.getElementById('add-doctor-form').addEventListener('submit', addDoctor);
    document.getElementById('revoke-doctor-form').addEventListener('submit', revokeDoctor);
    document.getElementById('get-stats-btn').addEventListener('click', getHospitalStats);
    
    // Doctor forms
    document.getElementById('set-fee-form').addEventListener('submit', setAppointmentFee);
    document.getElementById('add-patient-form').addEventListener('submit', addPatient);
    document.getElementById('add-medication-form').addEventListener('submit', addMedication);
    document.getElementById('get-doctor-appointments-btn').addEventListener('click', getDoctorAppointments);
    
    // 添加新的取消预约和完成预约按钮监听器
    document.getElementById('cancel-appointment-btn')?.addEventListener('click', cancelAppointment);
    document.getElementById('complete-appointment-btn')?.addEventListener('click', completeAppointment);
    
    // Patient forms
    document.getElementById('register-patient-form').addEventListener('submit', registerAsSelfPatient);
    document.getElementById('list-doctors-btn').addEventListener('click', listAllDoctors);
    document.getElementById('book-appointment-form').addEventListener('submit', bookAppointment);
    document.getElementById('get-medical-record-btn').addEventListener('click', getMedicalRecord);
    document.getElementById('get-patient-appointments-btn').addEventListener('click', getPatientAppointments);
    
    // 添加评价医生功能的监听器
    document.getElementById('rate-doctor-form')?.addEventListener('submit', rateDoctor);
}

// Select user role and update UI
function selectRole(role) {
    userRole = role;
    
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(`${role}-section`).classList.add('active');
    
    // Highlight active button
    document.querySelectorAll('#role-selection button').forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-primary');
    });
    document.getElementById(`${role}-btn`).classList.remove('btn-outline-primary');
    document.getElementById(`${role}-btn`).classList.add('btn-primary');
    
    // Additional role-specific setup
    if (role === 'doctor') {
        checkDoctorStatus();
    } else if (role === 'patient') {
        checkPatientStatus();
    }
}

// Reset UI when account changes
function resetUI() {
    userRole = null;
    
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Reset role selection
    document.querySelectorAll('#role-selection button').forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-primary');
    });
}

// Show toast notification
function showToast(title, message) {
    document.getElementById('toast-title').textContent = title;
    document.getElementById('toast-message').textContent = message;
    toastBootstrap.show();
}

// Format timestamp to readable date
function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
}

// Format address for display
function formatAddress(address) {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}

// Convert working days binary to readable format
function formatWorkingDays(binaryDays) {
    if (!binaryDays || binaryDays.length !== 7) {
        return "Unknown";
    }
    
    const days = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    const englishDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    let result = "";
    let englishResult = "";
    
    for (let i = 0; i < 7; i++) {
        if (binaryDays[i] === '1') {
            if (result.length > 0) {
                result += ", ";
                englishResult += ", ";
            }
            result += days[i];
            englishResult += englishDays[i];
        }
    }
    
    return `${result} | ${englishResult}`;
}

// Format doctor rating as stars
function formatRating(rating, count) {
    if (count === 0) return "尚无评分 | No ratings yet";
    
    // 将rating从"原始评分*100"转换为1-5星
    const actualRating = (rating / 100).toFixed(2);
    const stars = "★".repeat(Math.floor(actualRating)) + "☆".repeat(5 - Math.floor(actualRating));
    
    return `${stars} (${actualRating}/5.00, ${count}个评价 | ${count} ratings)`;
}

// ==================== DIRECTOR FUNCTIONS ====================

// Add a new doctor
async function addDoctor(event) {
    event.preventDefault();
    
    try {
        const doctorAddress = document.getElementById('doctor-address').value;
        const specialty = document.getElementById('doctor-specialty').value;
        const workingDays = document.getElementById('doctor-workdays').value;
        const qualification = document.getElementById('doctor-qualification').value;
        
        // 验证工作日格式
        if (!validateWorkingDaysFormat(workingDays)) {
            showToast('错误 | Error', '工作日格式无效，请使用7位二进制数字 | Invalid working days format, please use 7 binary digits');
            return;
        }
        
        await contract.methods.addDoctor(doctorAddress, specialty, workingDays, qualification)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '医生已添加 | Doctor added successfully');
        event.target.reset();
    } catch (error) {
        showToast('错误 | Error', '添加医生失败 | Failed to add doctor');
        console.error(error);
    }
}

// 验证工作日格式
function validateWorkingDaysFormat(workingDays) {
    // 检查是否为7位且仅由0和1组成
    return /^[0-1]{7}$/.test(workingDays);
}

// Revoke doctor permissions
async function revokeDoctor(event) {
    event.preventDefault();
    
    try {
        const doctorAddress = document.getElementById('revoke-doctor-address').value;
        
        await contract.methods.revokeDoctor(doctorAddress)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '医生权限已撤销 | Doctor permissions revoked');
        event.target.reset();
    } catch (error) {
        showToast('错误 | Error', '撤销医生权限失败 | Failed to revoke doctor');
        console.error(error);
    }
}

// Get hospital statistics
async function getHospitalStats() {
    try {
        const stats = await contract.methods.getHospitalStats().call({ from: currentAccount });
        
        const statsElement = document.getElementById('hospital-stats');
        statsElement.innerHTML = `
            <p>医生数量 | Doctor Count: ${stats.doctorCount}</p>
            <p>患者数量 | Patient Count: ${stats.patientCount}</p>
            <p>预约数量 | Appointment Count: ${stats.appointmentCount}</p>
        `;
        statsElement.classList.remove('d-none');
    } catch (error) {
        showToast('错误 | Error', '获取医院统计数据失败 | Failed to get hospital statistics');
        console.error(error);
    }
}

// ==================== DOCTOR FUNCTIONS ====================

// Check if current user is a doctor
async function checkDoctorStatus() {
    try {
        const doctor = await contract.methods.doctors(currentAccount).call();
        const statusElement = document.getElementById('doctor-status');
        
        if (doctor.isActive) {
            // 获取医生评分
            const ratingInfo = await contract.methods.getDoctorRating(currentAccount).call();
            const formattedRating = formatRating(ratingInfo.averageRating, ratingInfo.ratingCount);
            
            statusElement.innerHTML = `
                <p>医生状态: 活跃 | Doctor Status: Active</p>
                <p>专业: ${doctor.specialty} | Specialty: ${doctor.specialty}</p>
                <p>工作日: ${formatWorkingDays(doctor.workingDays)}</p>
                <p>资质: ${doctor.qualification} | Qualification: ${doctor.qualification}</p>
                <p>预约费用: ${doctor.appointmentFee} Wei | Appointment Fee: ${doctor.appointmentFee} Wei</p>
                <p>评分: ${formattedRating}</p>
            `;
            statusElement.classList.remove('alert-info', 'alert-danger');
            statusElement.classList.add('alert-success');
        } else {
            statusElement.textContent = '您不是活跃医生或尚未注册 | You are not an active doctor or not registered';
            statusElement.classList.remove('alert-info', 'alert-success');
            statusElement.classList.add('alert-danger');
        }
    } catch (error) {
        console.error(error);
        const statusElement = document.getElementById('doctor-status');
        statusElement.textContent = '检查医生状态失败 | Failed to check doctor status';
        statusElement.classList.remove('alert-info', 'alert-success');
        statusElement.classList.add('alert-danger');
    }
}

// Set appointment fee
async function setAppointmentFee(event) {
    event.preventDefault();
    
    try {
        const fee = document.getElementById('appointment-fee').value;
        
        await contract.methods.setAppointmentFee(fee)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '预约费用已设置 | Appointment fee set successfully');
        event.target.reset();
        checkDoctorStatus(); // Refresh doctor status
    } catch (error) {
        showToast('错误 | Error', '设置预约费用失败 | Failed to set appointment fee');
        console.error(error);
    }
}

// Add a new patient
async function addPatient(event) {
    event.preventDefault();
    
    try {
        const patientAddress = document.getElementById('patient-address').value;
        const age = document.getElementById('patient-age').value;
        const gender = document.getElementById('patient-gender').value;
        
        await contract.methods.addPatient(patientAddress, age, gender)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '患者已添加 | Patient added successfully');
        event.target.reset();
    } catch (error) {
        showToast('错误 | Error', '添加患者失败 | Failed to add patient');
        console.error(error);
    }
}

// Add medication record
async function addMedication(event) {
    event.preventDefault();
    
    try {
        const patientAddress = document.getElementById('medication-patient-address').value;
        const medication = document.getElementById('medication-record').value;
        
        await contract.methods.addMedication(patientAddress, medication)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '医疗记录已添加 | Medication record added successfully');
        event.target.reset();
    } catch (error) {
        showToast('错误 | Error', '添加医疗记录失败 | Failed to add medication record');
        console.error(error);
    }
}

// Get doctor's appointments
async function getDoctorAppointments() {
    try {
        const appointments = await contract.methods.getDoctorAppointments().call({ from: currentAccount });
        
        const appointmentsElement = document.getElementById('doctor-appointments');
        if (appointments.length === 0) {
            appointmentsElement.innerHTML = '<div class="alert alert-info">没有预约记录 | No appointments found</div>';
            // 隐藏取消和完成预约表单
            document.getElementById('cancel-appointment-form-doctor').classList.add('d-none');
            document.getElementById('complete-appointment-form').classList.add('d-none');
            return;
        }
        
        let html = '<div class="list-group">';
        for (const appointment of appointments) {
            const status = appointment.completed ? 
                '<span class="badge bg-success status-badge">已完成 | Completed</span>' : 
                '<span class="badge bg-warning text-dark status-badge">等待中 | Pending</span>';
            
            const date = formatTimestamp(appointment.date);
            
            html += `
                <div class="appointment-card">
                    <div class="d-flex w-100 justify-content-between align-items-center">
                        <h5 class="mb-1">预约ID: ${appointment.appointmentId} ${status}</h5>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1">患者: ${formatAddress(appointment.patient)}</p>
                        <small>预约费用: ${appointment.fee} Wei</small>
                    </div>
                    <p class="mb-1">日期: ${date}</p>
                    ${!appointment.completed ? `
                    <div class="d-flex justify-content-end mt-2 gap-2">
                        <button class="btn btn-sm btn-success complete-btn" 
                                data-patient="${appointment.patient}" 
                                data-id="${appointment.appointmentId}">
                            完成预约 | Complete
                        </button>
                        <button class="btn btn-sm btn-danger cancel-btn" 
                                data-patient="${appointment.patient}" 
                                data-id="${appointment.appointmentId}">
                            取消预约 | Cancel
                        </button>
                    </div>` : ''}
                </div>
            `;
        }
        html += '</div>';
        
        appointmentsElement.innerHTML = html;
        
        // 显示取消和完成预约表单
        document.getElementById('cancel-appointment-form-doctor').classList.remove('d-none');
        document.getElementById('complete-appointment-form').classList.remove('d-none');
        
        // 为完成和取消按钮添加事件监听器
        document.querySelectorAll('.complete-btn').forEach(button => {
            button.addEventListener('click', function() {
                const patientAddress = this.getAttribute('data-patient');
                const appointmentId = this.getAttribute('data-id');
                
                document.getElementById('complete-patient-address').value = patientAddress;
                document.getElementById('complete-appointment-id').value = appointmentId;
            });
        });
        
        document.querySelectorAll('.cancel-btn').forEach(button => {
            button.addEventListener('click', function() {
                const patientAddress = this.getAttribute('data-patient');
                const appointmentId = this.getAttribute('data-id');
                
                document.getElementById('cancel-patient-address').value = patientAddress;
                document.getElementById('cancel-appointment-id').value = appointmentId;
            });
        });
    } catch (error) {
        showToast('错误 | Error', '获取预约失败 | Failed to get appointments');
        console.error(error);
    }
}

// 取消预约函数
async function cancelAppointment() {
    try {
        const patientAddress = document.getElementById('cancel-patient-address').value;
        const appointmentId = document.getElementById('cancel-appointment-id').value;
        
        if (!patientAddress || !appointmentId) {
            showToast('错误 | Error', '请提供患者地址和预约ID | Please provide patient address and appointment ID');
            return;
        }
        
        // 使用更高的gas限制来确保交易有足够的gas完成
        await contract.methods.cancelAppointment(patientAddress, appointmentId)
            .send({ 
                from: currentAccount,
                gas: 500000 // 设置较高的gas限制
            });
        
        showToast('成功 | Success', '预约已取消 | Appointment cancelled successfully');
        getDoctorAppointments(); // 刷新预约列表
    } catch (error) {
        showToast('错误 | Error', `取消预约失败: ${error.message} | Failed to cancel appointment: ${error.message}`);
        console.error(error);
    }
}

// 完成预约函数
async function completeAppointment() {
    try {
        const patientAddress = document.getElementById('complete-patient-address').value;
        const appointmentId = document.getElementById('complete-appointment-id').value;
        
        if (!patientAddress || !appointmentId) {
            showToast('错误 | Error', '请提供患者地址和预约ID | Please provide patient address and appointment ID');
            return;
        }
        
        await contract.methods.completeAppointment(patientAddress, appointmentId)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '预约已完成 | Appointment completed successfully');
        getDoctorAppointments(); // 刷新预约列表
    } catch (error) {
        showToast('错误 | Error', `完成预约失败: ${error.message} | Failed to complete appointment: ${error.message}`);
        console.error(error);
    }
}

// ==================== PATIENT FUNCTIONS ====================

// Check if current user is a patient
async function checkPatientStatus() {
    try {
        const patient = await contract.methods.patients(currentAccount).call();
        const statusElement = document.getElementById('patient-status');
        const registrationForm = document.getElementById('patient-registration');
        
        if (patient.exists) {
            statusElement.innerHTML = `
                <p>患者状态: 已注册 | Patient Status: Registered</p>
                <p>年龄: ${patient.age} | Age: ${patient.age}</p>
                <p>性别: ${patient.gender} | Gender: ${patient.gender}</p>
            `;
            statusElement.classList.remove('alert-info', 'alert-danger');
            statusElement.classList.add('alert-success');
            registrationForm.style.display = 'none';
        } else {
            statusElement.textContent = '您尚未注册为患者 | You are not registered as a patient';
            statusElement.classList.remove('alert-info', 'alert-success');
            statusElement.classList.add('alert-warning');
            registrationForm.style.display = 'block';
        }
    } catch (error) {
        console.error(error);
        const statusElement = document.getElementById('patient-status');
        statusElement.textContent = '检查患者状态失败 | Failed to check patient status';
        statusElement.classList.remove('alert-info', 'alert-success');
        statusElement.classList.add('alert-danger');
    }
}

// Register as a patient
async function registerAsSelfPatient(event) {
    event.preventDefault();
    
    try {
        const age = document.getElementById('self-age').value;
        const gender = document.getElementById('self-gender').value;
        
        await contract.methods.registerAsSelfPatient(age, gender)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '注册成功 | Registration successful');
        event.target.reset();
        checkPatientStatus(); // Refresh patient status
    } catch (error) {
        showToast('错误 | Error', '注册失败 | Registration failed');
        console.error(error);
    }
}

// List all active doctors
async function listAllDoctors() {
    try {
        const doctorAddresses = await contract.methods.getAllDoctors().call();
        
        const doctorsListElement = document.getElementById('doctors-list');
        if (doctorAddresses.length === 0) {
            doctorsListElement.innerHTML = '<div class="alert alert-info">没有活跃医生 | No active doctors found</div>';
            return;
        }
        
        let html = '';
        for (const address of doctorAddresses) {
            const details = await contract.methods.getDoctorDetails(address).call();
            const ratingInfo = await contract.methods.getDoctorRating(address).call();
            const formattedRating = formatRating(ratingInfo.averageRating, ratingInfo.ratingCount);
            
            html += `
                <div class="doctor-card">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">医生: ${formatAddress(address)}</h5>
                        <small>预约费用: ${details.appointmentFee} Wei</small>
                    </div>
                    <p class="mb-1">专业: ${details.specialty}</p>
                    <p class="mb-1">工作日: ${formatWorkingDays(details.workingDays)}</p>
                    <p class="mb-1">资质: ${details.qualification}</p>
                    <p class="mb-1">评分: <span class="rating-stars">${formattedRating}</span></p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <button class="btn btn-sm btn-info view-doctor-btn" data-address="${address}">
                            查看详情 | View Details
                        </button>
                        <button class="btn btn-sm btn-primary select-doctor-btn" 
                            data-address="${address}" 
                            data-fee="${details.appointmentFee}">
                            选择预约 | Book Appointment
                        </button>
                    </div>
                </div>
            `;
        }
        
        doctorsListElement.innerHTML = html;
        
        // 为医生卡片上的按钮添加事件监听器
        document.querySelectorAll('.select-doctor-btn').forEach(button => {
            button.addEventListener('click', function() {
                const doctorAddress = this.getAttribute('data-address');
                const fee = this.getAttribute('data-fee');
                
                document.getElementById('appointment-doctor').value = doctorAddress;
                document.getElementById('fee-label').textContent = `费用 | Fee: ${fee} Wei`;
                document.getElementById('book-appointment-form').classList.remove('d-none');
                
                // 滚动到预约表单
                document.getElementById('book-appointment-form').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        document.querySelectorAll('.view-doctor-btn').forEach(button => {
            button.addEventListener('click', async function() {
                const doctorAddress = this.getAttribute('data-address');
                await showDoctorDetails(doctorAddress);
            });
        });
    } catch (error) {
        showToast('错误 | Error', '获取医生列表失败 | Failed to get doctors list');
        console.error(error);
    }
}

// 显示医生详细信息
async function showDoctorDetails(doctorAddress) {
    try {
        const doctor = await contract.methods.doctors(doctorAddress).call();
        const details = await contract.methods.getDoctorDetails(doctorAddress).call();
        const ratingInfo = await contract.methods.getDoctorRating(doctorAddress).call();
        
        // 计算可读的评分
        const averageRating = ratingInfo.ratingCount > 0 ? 
            (ratingInfo.totalRating / ratingInfo.ratingCount).toFixed(2) : 0;
        
        const modalContent = document.getElementById('doctor-details-content');
        modalContent.innerHTML = `
            <div class="text-center mb-3">
                <h4>医生详情 | Doctor Details</h4>
                <p class="text-muted">${doctorAddress}</p>
            </div>
            <div class="row mb-2">
                <div class="col-5 fw-bold">专业 | Specialty:</div>
                <div class="col-7">${details.specialty}</div>
            </div>
            <div class="row mb-2">
                <div class="col-5 fw-bold">工作日 | Working Days:</div>
                <div class="col-7">${formatWorkingDays(details.workingDays)}</div>
            </div>
            <div class="row mb-2">
                <div class="col-5 fw-bold">资质 | Qualification:</div>
                <div class="col-7">${details.qualification}</div>
            </div>
            <div class="row mb-2">
                <div class="col-5 fw-bold">预约费用 | Fee:</div>
                <div class="col-7">${details.appointmentFee} Wei</div>
            </div>
            <div class="row mb-2">
                <div class="col-5 fw-bold">评分 | Rating:</div>
                <div class="col-7">
                    <span class="rating-stars">${formatRating(ratingInfo.averageRating, ratingInfo.ratingCount)}</span>
                </div>
            </div>
            <div class="d-grid gap-2 mt-3">
                <button class="btn btn-primary select-for-appointment" data-address="${doctorAddress}" data-fee="${details.appointmentFee}">
                    预约此医生 | Book This Doctor
                </button>
            </div>
        `;
        
        // 显示模态框
        doctorDetailsModal.show();
        
        // 为模态框中的预约按钮添加点击事件
        document.querySelector('.select-for-appointment').addEventListener('click', function() {
            const doctorAddress = this.getAttribute('data-address');
            const fee = this.getAttribute('data-fee');
            
            document.getElementById('appointment-doctor').value = doctorAddress;
            document.getElementById('fee-label').textContent = `费用 | Fee: ${fee} Wei`;
            document.getElementById('book-appointment-form').classList.remove('d-none');
            
            // 关闭模态框
            doctorDetailsModal.hide();
            
            // 滚动到预约表单
            document.getElementById('book-appointment-form').scrollIntoView({
                behavior: 'smooth'
            });
        });
    } catch (error) {
        showToast('错误 | Error', '获取医生详情失败 | Failed to get doctor details');
        console.error(error);
    }
}

// Book an appointment with a doctor
async function bookAppointment(event) {
    event.preventDefault();
    
    try {
        const doctorAddress = document.getElementById('appointment-doctor').value;
        const dateInput = document.getElementById('appointment-date').value;
        
        // 验证输入
        if (!doctorAddress || !dateInput) {
            showToast('错误 | Error', '请填写所有必填字段 | Please fill all required fields');
            return;
        }
        
        // Convert date to timestamp (seconds)
        const date = Math.floor(new Date(dateInput).getTime() / 1000);
        
        // Get doctor's fee
        const details = await contract.methods.getDoctorDetails(doctorAddress).call();
        const fee = details.appointmentFee;
        
        // Check if doctor is available
        const isAvailable = await contract.methods.isDoctorAvailable(doctorAddress, date).call();
        if (!isAvailable) {
            showToast('错误 | Error', '医生在该日期不可用 | Doctor is not available on this date');
            return;
        }
        
        await contract.methods.bookAppointment(doctorAddress, date)
            .send({ from: currentAccount, value: fee });
        
        showToast('成功 | Success', '预约成功 | Appointment booked successfully');
        event.target.reset();
        document.getElementById('book-appointment-form').classList.add('d-none');
    } catch (error) {
        showToast('错误 | Error', `预约失败: ${error.message} | Booking failed: ${error.message}`);
        console.error(error);
    }
}

// Get patient's medical record
async function getMedicalRecord() {
    try {
        const record = await contract.methods.getMyMedicalRecord().call({ from: currentAccount });
        
        const recordElement = document.getElementById('medical-record');
        recordElement.innerHTML = `
            <p>年龄 | Age: ${record.age}</p>
            <p>性别 | Gender: ${record.gender}</p>
            <p>医疗记录 | Medical Record: ${record.medicationRecord || '无记录 | No records'}</p>
        `;
        recordElement.classList.remove('d-none');
    } catch (error) {
        showToast('错误 | Error', '获取医疗记录失败 | Failed to get medical record');
        console.error(error);
    }
}

// Get patient's appointments
async function getPatientAppointments() {
    try {
        const appointments = await contract.methods.getMyAppointments().call({ from: currentAccount });
        
        const appointmentsElement = document.getElementById('patient-appointments');
        if (appointments.length === 0) {
            appointmentsElement.innerHTML = '<div class="alert alert-info">没有预约记录 | No appointments found</div>';
            return;
        }
        
        let html = '';
        for (const appointment of appointments) {
            const doctorDetails = await contract.methods.getDoctorDetails(appointment.doctor).call();
            const status = appointment.completed ? 
                '<span class="badge bg-success status-badge">已完成 | Completed</span>' : 
                '<span class="badge bg-warning text-dark status-badge">等待中 | Pending</span>';
            
            html += `
                <div class="appointment-card">
                    <div class="d-flex w-100 justify-content-between align-items-center">
                        <h5 class="mb-1">预约ID: ${appointment.appointmentId} ${status}</h5>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <p class="mb-1"><strong>医生 | Doctor:</strong> ${formatAddress(appointment.doctor)}</p>
                            <p class="mb-1"><strong>专业 | Specialty:</strong> ${doctorDetails.specialty}</p>
                            <p class="mb-1"><strong>日期 | Date:</strong> ${formatTimestamp(appointment.date)}</p>
                        </div>
                        <div class="col-md-6">
                            <p class="mb-1"><strong>费用 | Fee:</strong> ${appointment.fee} Wei</p>
                            ${appointment.completed ? `
                            <button class="btn btn-sm btn-primary rate-btn mt-2" 
                                data-doctor="${appointment.doctor}" 
                                data-id="${appointment.appointmentId}">
                                评价医生 | Rate Doctor
                            </button>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }
        
        appointmentsElement.innerHTML = html;
        
        // 为评价按钮添加事件监听器
        document.querySelectorAll('.rate-btn').forEach(button => {
            button.addEventListener('click', function() {
                const doctorAddress = this.getAttribute('data-doctor');
                const appointmentId = this.getAttribute('data-id');
                
                document.getElementById('rate-doctor-address').value = doctorAddress;
                document.getElementById('rate-appointment-id').value = appointmentId;
                
                // 滚动到评价表单
                document.getElementById('rate-doctor-form').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    } catch (error) {
        showToast('错误 | Error', '获取预约失败 | Failed to get appointments');
        console.error(error);
    }
}

// 评价医生函数
async function rateDoctor(event) {
    event.preventDefault();
    
    try {
        const doctorAddress = document.getElementById('rate-doctor-address').value;
        const appointmentId = document.getElementById('rate-appointment-id').value;
        const rating = document.getElementById('doctor-rating').value;
        
        if (!doctorAddress || !appointmentId || !rating) {
            showToast('错误 | Error', '请提供所有必填字段 | Please provide all required fields');
            return;
        }
        
        await contract.methods.rateDoctor(doctorAddress, appointmentId, rating)
            .send({ from: currentAccount });
        
        showToast('成功 | Success', '评价已提交 | Rating submitted successfully');
        event.target.reset();
    } catch (error) {
        showToast('错误 | Error', `评价失败: ${error.message} | Rating failed: ${error.message}`);
        console.error(error);
    }
}

// 验证医生身份函数
async function verifyDoctor(doctorAddress) {
    try {
        const result = await contract.methods.verifyDoctor(doctorAddress).call({ from: currentAccount });
        
        if (result.isDoctor) {
            showToast('验证成功 | Verification Success', `${formatAddress(doctorAddress)} 是有效医生 | is a valid doctor`);
        } else {
            showToast('验证失败 | Verification Failed', `${formatAddress(doctorAddress)} 不是有效医生 | is not a valid doctor`);
        }
    } catch (error) {
        showToast('错误 | Error', '验证医生失败 | Failed to verify doctor');
        console.error(error);
    }
}

// 显示预约详情
function showAppointmentDetails(appointment, doctorDetails, patientDetails) {
    const modalContent = document.getElementById('appointment-details-content');
    const status = appointment.completed ? 
        '<span class="badge bg-success">已完成 | Completed</span>' : 
        '<span class="badge bg-warning text-dark">等待中 | Pending</span>';
    
    modalContent.innerHTML = `
        <div class="text-center mb-3">
            <h4>预约详情 | Appointment Details</h4>
            <div>${status}</div>
        </div>
        <div class="row mb-2">
            <div class="col-5 fw-bold">预约ID | ID:</div>
            <div class="col-7">${appointment.appointmentId}</div>
        </div>
        <div class="row mb-2">
            <div class="col-5 fw-bold">患者 | Patient:</div>
            <div class="col-7">${formatAddress(appointment.patient)}</div>
        </div>
        <div class="row mb-2">
            <div class="col-5 fw-bold">医生 | Doctor:</div>
            <div class="col-7">${formatAddress(appointment.doctor)}</div>
        </div>
        <div class="row mb-2">
            <div class="col-5 fw-bold">专业 | Specialty:</div>
            <div class="col-7">${doctorDetails?.specialty || '未知 | Unknown'}</div>
        </div>
        <div class="row mb-2">
            <div class="col-5 fw-bold">日期 | Date:</div>
            <div class="col-7">${formatTimestamp(appointment.date)}</div>
        </div>
        <div class="row mb-2">
            <div class="col-5 fw-bold">费用 | Fee:</div>
            <div class="col-7">${appointment.fee} Wei</div>
        </div>
    `;
    
    appointmentDetailsModal.show();
}

// 检查当前区块链网络
async function checkNetwork() {
    try {
        const networkId = await web3.eth.net.getId();
        let networkName;
        
        switch(networkId) {
            case 1:
                networkName = "以太坊主网 | Ethereum Mainnet";
                break;
            case 3:
                networkName = "Ropsten测试网 | Ropsten Testnet";
                break;
            case 4:
                networkName = "Rinkeby测试网 | Rinkeby Testnet";
                break;
            case 5:
                networkName = "Goerli测试网 | Goerli Testnet";
                break;
            case 42:
                networkName = "Kovan测试网 | Kovan Testnet";
                break;
            case 1337:
                networkName = "本地网络 | Local Network";
                break;
            default:
                networkName = `未知网络ID: ${networkId} | Unknown Network ID: ${networkId}`;
        }
        
        console.log(`当前连接到: ${networkName} | Connected to: ${networkName}`);
        return networkName;
    } catch (error) {
        console.error("检查网络失败 | Failed to check network:", error);
        return "未知网络 | Unknown Network";
    }
}

// 检查区块链同步状态
async function checkSyncStatus() {
    try {
        const syncStatus = await web3.eth.isSyncing();
        if (syncStatus) {
            console.log("区块链正在同步 | Blockchain is syncing", syncStatus);
            return false;
        }
        return true;
    } catch (error) {
        console.error("检查同步状态失败 | Failed to check sync status:", error);
        return false;
    }
}

// 应用初始化函数 - 将在页面加载时调用
window.addEventListener('load', initApp);

async function initApp() {
    // 初始化UI元素
    initializeUIElements();
    
    // 检查MetaMask是否安装
    if (window.ethereum) {
        try {
            // 请求帐户访问权限
            web3 = new Web3(window.ethereum);
            
            // 检查是否已连接
            accounts = await web3.eth.getAccounts();
            if (accounts.length > 0) {
                currentAccount = accounts[0];
                
                // 检查网络和同步状态
                const networkName = await checkNetwork();
                const isSynced = await checkSyncStatus();
                
                if (isSynced) {
                    onWalletConnected();
                } else {
                    showToast('警告 | Warning', '区块链正在同步，某些功能可能不可用 | Blockchain is syncing, some features may be unavailable');
                }
            }
        } catch (error) {
            showToast('错误 | Error', '无法连接到区块链网络 | Unable to connect to blockchain network');
            console.error(error);
        }
    } else {
        showToast('警告 | Warning', '请安装 MetaMask 钱包 | Please install MetaMask wallet');
    }
}

// 初始化UI元素
function initializeUIElements() {
    // 初始化Bootstrap toast和模态框
    toast = document.getElementById('toast');
    if (toast) {
        toastBootstrap = new bootstrap.Toast(toast);
    }
    
    const doctorDetailsModalEl = document.getElementById('doctorDetailsModal');
    if (doctorDetailsModalEl) {
        doctorDetailsModal = new bootstrap.Modal(doctorDetailsModalEl);
    }
    
    const appointmentDetailsModalEl = document.getElementById('appointmentDetailsModal');
    if (appointmentDetailsModalEl) {
        appointmentDetailsModal = new bootstrap.Modal(appointmentDetailsModalEl);
    }
    
    // 设置事件监听器
    setupEventListeners();
}

// 设置事件监听器
function setupEventListeners() {
    // 钱包连接按钮
    const connectWalletBtn = document.getElementById('connect-wallet');
    if (connectWalletBtn) {
        connectWalletBtn.addEventListener('click', connectWallet);
    }
    
    // 角色选择按钮
    const directorBtn = document.getElementById('director-btn');
    const doctorBtn = document.getElementById('doctor-btn');
    const patientBtn = document.getElementById('patient-btn');
    
    if (directorBtn) {
        directorBtn.addEventListener('click', () => selectRole('director'));
    }
    if (doctorBtn) {
        doctorBtn.addEventListener('click', () => selectRole('doctor'));
    }
    if (patientBtn) {
        patientBtn.addEventListener('click', () => selectRole('patient'));
    }
    
    // 设置表单监听器
    setupFormListeners();
}
