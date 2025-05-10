const contractAddress = '0x3d242f46eDf4aA8531194512f479d419B284b746'; // 请填入您的合约地址 | Insert your contract address here

// 这里需要添加合约 ABI | Contract ABI needs to be added here
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

let web3;
let contract;
let currentAccount;
let userRole = 'unknown'; // 'director', 'doctor', 'patient', or 'unknown'

// DOM 加载完成后初始化应用 | Initialize app when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('connectWallet').addEventListener('click', connectWallet);
    setupEventListeners();
    
    // 如果已经有 MetaMask，则尝试自动连接 | If MetaMask exists, try to connect automatically
    if (window.ethereum) {
        connectWallet().catch(error => {
            console.error('Auto connect failed:', error);
            updateStatus('请连接到 MetaMask | Please connect to MetaMask', true);
        });
    } else {
        updateStatus('请安装 MetaMask 后使用 | Please install MetaMask to use this DApp', true);
    }
});

// 连接钱包函数 | Connect wallet function
async function connectWallet() {
    try {
        if (!window.ethereum) throw new Error('No wallet found');
        
        web3 = new Web3(window.ethereum);
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        currentAccount = accounts[0];
        
        // 创建合约实例 | Create contract instance
        contract = new web3.eth.Contract(contractABI, contractAddress);
        
        // 更新用户信息 | Update user info
        document.getElementById('userAddress').textContent = shortenAddress(currentAccount);
        
        // 确定用户角色 | Determine user role
        await determineUserRole();
        
        // 监听账户变化 | Listen for account changes
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        
        updateStatus('已连接到钱包 | Connected to wallet');
        return true;
    } catch (error) {
        console.error('连接钱包出错 | Error connecting to wallet:', error);
        updateStatus('连接钱包出错 | Error connecting to wallet', true);
        throw error;
    }
}

// 账户变更处理函数 | Handle account changes
function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        updateStatus('请连接到 MetaMask | Please connect to MetaMask', true);
    } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        document.getElementById('userAddress').textContent = shortenAddress(currentAccount);
        determineUserRole();
    }
}

// 确定用户角色 | Determine user role
async function determineUserRole() {
    try {
        // 重置所有部分 | Reset all sections
        hideSection('directorSection');
        hideSection('doctorSection');
        hideSection('patientSection');
        
        // 检查是否是院长 | Check if director
        const director = await contract.methods.director().call();
        if (director.toLowerCase() === currentAccount.toLowerCase()) {
            userRole = 'director';
            document.getElementById('userRole').textContent = '院长 | Director';
            showSection('directorSection');
            return;
        }
        
        // 检查是否是医生 | Check if doctor
        const doctorInfo = await contract.methods.doctors(currentAccount).call();
        if (doctorInfo.isActive) {
            userRole = 'doctor';
            document.getElementById('userRole').textContent = '医生 | Doctor';
            showSection('doctorSection');
            return;
        }
        
        // 检查是否是患者 | Check if patient
        const patientInfo = await contract.methods.patients(currentAccount).call();
        if (patientInfo.exists) {
            userRole = 'patient';
            document.getElementById('userRole').textContent = '患者 | Patient';
            showSection('patientSection');
            return;
        }
        
        // 默认情况下，用户是未注册用户 | By default, user is unregistered
        userRole = 'unknown';
        document.getElementById('userRole').textContent = '未注册用户 | Unregistered User';
        showSection('patientSection'); // 显示患者部分，以便用户可以注册 | Show patient section so user can register
    } catch (error) {
        console.error('确定用户角色出错 | Error determining user role:', error);
        updateStatus('确定用户角色出错 | Error determining user role', true);
    }
}

// 设置所有事件监听器 | Set up all event listeners
function setupEventListeners() {
    // 使用可选链操作符，防止元素不存在时报错 | Use optional chaining to prevent errors when elements don't exist
    
    // 院长功能 | Director functions
    document.getElementById('addDoctorBtn')?.addEventListener('click', addDoctor);
    document.getElementById('revokeDoctorBtn')?.addEventListener('click', revokeDoctor);
    document.getElementById('getStatsBtn')?.addEventListener('click', getHospitalStats);
    
    // 医生功能 | Doctor functions
    document.getElementById('addPatientBtn')?.addEventListener('click', addPatient);
    document.getElementById('addMedicationBtn')?.addEventListener('click', addMedication);
    document.getElementById('setFeeBtn')?.addEventListener('click', setAppointmentFee);
    document.getElementById('getDocAppointmentsBtn')?.addEventListener('click', getDoctorAppointments);
    
    // 检查患者列表按钮是否存在 | Check if patient list button exists
    const patientListBtn = document.getElementById('getPatientListBtn');
    if (patientListBtn) {
        patientListBtn.addEventListener('click', getPatientList);
    }
    
    // 患者功能 | Patient functions
    document.getElementById('registerPatientBtn')?.addEventListener('click', registerAsPatient);
    document.getElementById('getDoctorsBtn')?.addEventListener('click', () => displayDoctorList('doctorsList'));
    document.getElementById('checkAvailabilityBtn')?.addEventListener('click', checkDoctorAvailability);
    document.getElementById('bookAppointmentBtn')?.addEventListener('click', bookAppointment);
    document.getElementById('getMyRecordBtn')?.addEventListener('click', getMyMedicalRecord);
    document.getElementById('getMyAppointmentsBtn')?.addEventListener('click', getMyAppointments);
    document.getElementById('verifyDoctorBtn')?.addEventListener('click', verifyDoctor);
    
    // 通用功能 | Common functions
    document.getElementById('viewAllDoctorsBtn')?.addEventListener('click', () => displayDoctorList('allDoctorsList'));
}

// 院长功能实现 | Director function implementations
async function addDoctor() {
    const doctorAddress = document.getElementById('doctorAddress').value;
    const specialty = document.getElementById('doctorSpecialty').value;
    const workingDays = document.getElementById('doctorWorkingDays').value;
    const qualification = document.getElementById('doctorQualification').value;
    
    if (!validateInputs([
        { value: doctorAddress, message: '请输入医生地址 | Please enter doctor address', isAddress: true },
        { value: specialty, message: '请输入专业 | Please enter specialty' },
        { value: workingDays, message: '请输入工作日 | Please enter working days' },
        { value: qualification, message: '请输入学历 | Please enter qualification' }
    ])) return;
    
    try {
        updateStatus('添加医生中... | Adding doctor...');
        await contract.methods.addDoctor(doctorAddress, specialty, workingDays, qualification)
            .send({ from: currentAccount });
        updateStatus('医生添加成功 | Doctor added successfully');
        clearInputs(['doctorAddress', 'doctorSpecialty', 'doctorWorkingDays', 'doctorQualification']);
    } catch (error) {
        handleError('添加医生出错 | Error adding doctor', error);
    }
}

async function revokeDoctor() {
    const doctorAddress = document.getElementById('revokeDoctorAddress').value;
    
    if (!validateInputs([
        { value: doctorAddress, message: '请输入医生地址 | Please enter doctor address', isAddress: true }
    ])) return;
    
    try {
        updateStatus('撤销医生中... | Revoking doctor...');
        await contract.methods.revokeDoctor(doctorAddress)
            .send({ from: currentAccount });
        updateStatus('医生已撤销 | Doctor revoked successfully');
        clearInputs(['revokeDoctorAddress']);
    } catch (error) {
        handleError('撤销医生出错 | Error revoking doctor', error);
    }
}

async function getHospitalStats() {
    try {
        const stats = await contract.methods.getHospitalStats().call();
        
        document.getElementById('statsResult').innerHTML = `
            <div class="alert alert-success">
                <p>医生数量 | Doctor Count: ${stats.doctorCount}</p>
                <p>患者数量 | Patient Count: ${stats.patientCount}</p>
                <p>预约数量 | Appointment Count: ${stats.appointmentCount}</p>
            </div>
        `;
    } catch (error) {
        handleError('获取统计数据出错 | Error getting stats', error);
    }
}

// 医生功能实现 | Doctor function implementations
async function addPatient() {
    const patientAddress = document.getElementById('patientAddress').value;
    const age = document.getElementById('patientAge').value;
    const gender = document.getElementById('patientGender').value;
    
    if (!validateInputs([
        { value: patientAddress, message: '请输入患者地址 | Please enter patient address', isAddress: true },
        { value: age, message: '请输入年龄 | Please enter age' }
    ])) return;
    
    try {
        updateStatus('添加患者中... | Adding patient...');
        await contract.methods.addPatient(patientAddress, age, gender)
            .send({ from: currentAccount });
        updateStatus('患者添加成功 | Patient added successfully');
        clearInputs(['patientAddress', 'patientAge']);
    } catch (error) {
        handleError('添加患者出错 | Error adding patient', error);
    }
}

async function addMedication() {
    const patientAddress = document.getElementById('medPatientAddress').value;
    const medication = document.getElementById('medication').value;
    
    if (!validateInputs([
        { value: patientAddress, message: '请输入患者地址 | Please enter patient address', isAddress: true },
        { value: medication, message: '请输入药物记录 | Please enter medication' }
    ])) return;
    
    try {
        updateStatus('添加药物记录中... | Adding medication...');
        await contract.methods.addMedication(patientAddress, medication)
            .send({ from: currentAccount });
        updateStatus('药物记录添加成功 | Medication added successfully');
        clearInputs(['medPatientAddress', 'medication']);
    } catch (error) {
        handleError('添加药物记录出错 | Error adding medication', error);
    }
}

async function setAppointmentFee() {
    const fee = document.getElementById('appointmentFee').value;
    
    if (!validateInputs([
        { value: fee, message: '请输入费用 | Please enter fee' }
    ])) return;
    
    try {
        updateStatus('设置费用中... | Setting fee...');
        const feeInWei = web3.utils.toWei(fee, 'ether');
        await contract.methods.setAppointmentFee(feeInWei)
            .send({ from: currentAccount });
        updateStatus('费用设置成功 | Fee set successfully');
        clearInputs(['appointmentFee']);
    } catch (error) {
        handleError('设置费用出错 | Error setting fee', error);
    }
}

// 新增函数：获取患者列表 | New function: Get patient list
async function getPatientList() {
    try {
        // 检查结果容器是否存在 | Check if result container exists
        const resultContainer = document.getElementById('patientListResult');
        if (!resultContainer) {
            console.error('患者列表结果容器不存在 | Patient list result container does not exist');
            return;
        }
        
        // 获取所有患者地址 | Get all patient addresses
        const patientAddresses = await contract.methods.patientList().call();
        
        if (patientAddresses.length === 0) {
            resultContainer.innerHTML = 
                '<div class="alert alert-info">没有患者 | No patients</div>';
            return;
        }
        
        let html = '<div class="list-group">';
        
        for (let i = 0; i < patientAddresses.length; i++) {
            const patientAddress = patientAddresses[i];
            // 获取患者详细信息 | Get patient details
            const patientInfo = await contract.methods.getPatientDetails(patientAddress).call();
            
            html += `
                <div class="list-group-item">
                    <h5>患者 #${i+1}</h5>
                    <p>地址 | Address: <span id="patient-address-${i}">${patientAddress}</span></p>
                    <p>年龄 | Age: ${patientInfo.age}</p>
                    <p>性别 | Gender: ${patientInfo.gender}</p>
                    <p>药物记录 | Medication Record: ${patientInfo.medicationRecord || '无 | None'}</p>
                    <div class="btn-group">
                        <button class="btn btn-sm btn-primary" onclick="copyToClipboard('${patientAddress}')">
                            复制地址 | Copy Address
                        </button>
                        <button class="btn btn-sm btn-success" onclick="fillPatientAddress('${patientAddress}')">
                            添加药物记录 | Add Medication
                        </button>
                    </div>
                </div>
            `;
        }
        
        html += '</div>';
        resultContainer.innerHTML = html;
    } catch (error) {
        handleError('获取患者列表出错 | Error getting patient list', error);
    }
}

// 复制到剪贴板函数 | Copy to clipboard function
function copyToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    
    navigator.clipboard.writeText(text).then(
        function() {
            updateStatus('地址已复制到剪贴板 | Address copied to clipboard');
        }, 
        function() {
            updateStatus('复制失败 | Copy failed', true);
        }
    );
}

// 兼容性复制文本到剪贴板 | Fallback method to copy text to clipboard
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // 避免滚动到底部 | Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        updateStatus(successful ? '地址已复制到剪贴板 | Address copied to clipboard' : '复制失败 | Copy failed', !successful);
    } catch (err) {
        updateStatus('复制失败 | Copy failed', true);
    }
    
    document.body.removeChild(textArea);
}

// 新增函数：填充患者地址到药物记录表单 | New function: Fill patient address to medication form
function fillPatientAddress(address) {
    const medPatientAddressInput = document.getElementById('medPatientAddress');
    if (medPatientAddressInput) {
        medPatientAddressInput.value = address;
        // 滚动到药物记录表单 | Scroll to medication form
        const medicationFormCard = document.getElementById('medicationFormCard');
        if (medicationFormCard) {
            medicationFormCard.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

async function getDoctorAppointments() {
    try {
        const appointments = await contract.methods.getDoctorAppointments().call({ from: currentAccount });
        const appointmentsList = document.getElementById('doctorAppointmentsList');
        
        if (!appointmentsList) {
            console.error('医生预约列表容器不存在 | Doctor appointments list container does not exist');
            return;
        }
        
        if (appointments.length === 0) {
            appointmentsList.innerHTML = 
                '<div class="alert alert-info">没有预约 | No appointments</div>';
            return;
        }
        
        let html = '<div class="list-group">';
        
        for (let i = 0; i < appointments.length; i++) {
            const appointment = appointments[i];
            const date = new Date(appointment.date * 1000);
            const fee = web3.utils.fromWei(appointment.fee, 'ether');
            
            html += `
                <div class="list-group-item">
                    <h5>预约 #${i+1}</h5>
                    <p>患者 | Patient: ${shortenAddress(appointment.patient)}</p>
                    <p>日期 | Date: ${date.toLocaleString()}</p>
                    <p>费用 | Fee: ${fee} ETH</p>
                    <p>状态 | Status: ${appointment.completed ? '已完成 | Completed' : '未完成 | Pending'}</p>
                    ${!appointment.completed ? `
                        <div class="btn-group">
                            <button class="btn btn-sm btn-primary" onclick="copyToClipboard('${appointment.patient}')">
                                复制患者地址 | Copy Patient Address
                            </button>
                            <button class="btn btn-sm btn-success" onclick="completeAppointment('${appointment.patient}', ${i})">
                                完成预约 | Complete
                            </button>
                            <button class="btn btn-sm btn-danger" onclick="cancelAppointment('${appointment.patient}', ${i})">
                                取消预约 | Cancel
                            </button>
                            <button class="btn btn-sm btn-info" onclick="fillPatientAddress('${appointment.patient}')">
                                添加药物记录 | Add Medication
                            </button>
                        </div>
                    ` : ''}
                </div>
            `;
        }
        
        html += '</div>';
        appointmentsList.innerHTML = html;
    } catch (error) {
        handleError('获取预约出错 | Error getting appointments', error);
    }
}

async function completeAppointment(patientAddress, appointmentIndex) {
    try {
        updateStatus('完成预约中... | Completing appointment...');
        await contract.methods.completeAppointment(patientAddress, appointmentIndex)
            .send({ from: currentAccount });
        updateStatus('预约已完成 | Appointment completed');
        getDoctorAppointments();
    } catch (error) {
        handleError('完成预约出错 | Error completing appointment', error);
    }
}

async function cancelAppointment(patientAddress, appointmentIndex) {
    try {
        updateStatus('取消预约中... | Cancelling appointment...');
        await contract.methods.cancelAppointment(patientAddress, appointmentIndex)
            .send({ from: currentAccount });
        updateStatus('预约已取消 | Appointment cancelled');
        getDoctorAppointments();
    } catch (error) {
        handleError('取消预约出错 | Error cancelling appointment', error);
    }
}

// 患者功能实现 | Patient function implementations
async function registerAsPatient() {
    const age = document.getElementById('registerAge').value;
    const gender = document.getElementById('registerGender').value;
    
    if (!validateInputs([
        { value: age, message: '请输入年龄 | Please enter age' }
    ])) return;
    
    try {
        updateStatus('注册中... | Registering...');
        await contract.methods.registerAsSelfPatient(age, gender)
            .send({ from: currentAccount });
        updateStatus('注册成功 | Registration successful');
        clearInputs(['registerAge']);
        
        // 重新确定用户角色 | Re-determine user role
        await determineUserRole();
    } catch (error) {
        handleError('注册出错 | Error registering', error);
    }
}

async function displayDoctorList(elementId) {
    try {
        const doctorListElement = document.getElementById(elementId);
        if (!doctorListElement) {
            console.error(`医生列表容器不存在: ${elementId} | Doctor list container does not exist: ${elementId}`);
            return;
        }
        
        // 获取所有医生地址 | Get all doctor addresses
        const doctorAddresses = await contract.methods.getAllDoctors().call();
        
        if (doctorAddresses.length === 0) {
            doctorListElement.innerHTML = 
                '<div class="alert alert-info">没有医生 | No doctors</div>';
            return;
        }
        
        let html = '<div class="list-group">';
        
        for (let i = 0; i < doctorAddresses.length; i++) {
            const doctorAddress = doctorAddresses[i];
            // 获取医生详细信息 | Get doctor details
            const doctorInfo = await contract.methods.getDoctorDetails(doctorAddress).call();
            // 获取医生评分 | Get doctor rating
            const ratingInfo = await contract.methods.getDoctorRating(doctorAddress).call();
            
            const averageRating = ratingInfo.ratingCount > 0 ? 
                (ratingInfo.averageRating / 100).toFixed(2) : 'N/A';
            
            html += `
                <div class="list-group-item">
                    <h5>医生 #${i+1}</h5>
                    <p>地址 | Address: ${shortenAddress(doctorAddress)}</p>
                    <p>专业 | Specialty: ${doctorInfo.specialty}</p>
                    <p>工作日 | Working Days: ${formatWorkingDays(doctorInfo.workingDays)}</p>
                    <p>学历 | Qualification: ${doctorInfo.qualification}</p>
                    <p>预约费用 | Appointment Fee: ${web3.utils.fromWei(doctorInfo.appointmentFee, 'ether')} ETH</p>
                    <p>评分 | Rating: ${averageRating} (${ratingInfo.ratingCount} 条评价 | reviews)</p>
                    ${userRole === 'patient' ? `
                        <div class="btn-group">
                            <button class="btn btn-sm btn-primary" onclick="copyToClipboard('${doctorAddress}')">
                                复制地址 | Copy Address
                            </button>
                            <button class="btn btn-sm btn-success" onclick="fillDoctorAddress('${doctorAddress}')">
                                预约 | Book Appointment
                            </button>
                        </div>
                    ` : ''}
                </div>
            `;
        }
        
        html += '</div>';
        doctorListElement.innerHTML = html;
    } catch (error) {
        handleError(`获取医生列表出错 | Error getting doctor list: ${elementId}`, error);
    }
}

// 格式化工作日显示 | Format working days display
function formatWorkingDays(workingDays) {
    const days = ['日', '一', '二', '三', '四', '五', '六'];
    const englishDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let result = '';
    
    for (let i = 0; i < workingDays.length; i++) {
        if (workingDays[i] === '1') {
            result += `周${days[i]}(${englishDays[i]}) `;
        }
    }
    
    return result || '无工作日 | No working days';
}

// 填充医生地址到预约表单 | Fill doctor address to appointment form
function fillDoctorAddress(address) {
    const bookDoctorAddressInput = document.getElementById('bookDoctorAddress');
    if (bookDoctorAddressInput) {
        bookDoctorAddressInput.value = address;
        // 滚动到预约表单 | Scroll to appointment form
        const parentCard = bookDoctorAddressInput.closest('.card');
        if (parentCard) {
            parentCard.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

async function checkDoctorAvailability() {
    const doctorAddress = document.getElementById('bookDoctorAddress').value;
    const dateInput = document.getElementById('appointmentDate').value;
    
    if (!validateInputs([
        { value: doctorAddress, message: '请输入医生地址 | Please enter doctor address', isAddress: true },
        { value: dateInput, message: '请输入预约日期 | Please enter appointment date' }
    ])) return;
    
    try {
        const timestamp = Math.floor(new Date(dateInput).getTime() / 1000);
        const isAvailable = await contract.methods.isDoctorAvailable(doctorAddress, timestamp).call();
        
        const availabilityResult = document.getElementById('availabilityResult');
        if (availabilityResult) {
            availabilityResult.innerHTML = isAvailable ? 
                '<div class="alert alert-success">医生可以在此时间预约 | Doctor is available at this time</div>' :
                '<div class="alert alert-danger">医生在此时间不可用 | Doctor is not available at this time</div>';
        }
    } catch (error) {
        handleError('检查可用性出错 | Error checking availability', error);
    }
}

async function bookAppointment() {
    const doctorAddress = document.getElementById('bookDoctorAddress').value;
    const dateInput = document.getElementById('appointmentDate').value;
    
    if (!validateInputs([
        { value: doctorAddress, message: '请输入医生地址 | Please enter doctor address', isAddress: true },
        { value: dateInput, message: '请输入预约日期 | Please enter appointment date' }
    ])) return;
    
    try {
        const timestamp = Math.floor(new Date(dateInput).getTime() / 1000);
        
        // 获取医生预约费用 | Get doctor's appointment fee
        const doctorInfo = await contract.methods.getDoctorDetails(doctorAddress).call();
        const fee = doctorInfo.appointmentFee;
        
        updateStatus('预约中... | Booking appointment...');
        await contract.methods.bookAppointment(doctorAddress, timestamp)
            .send({ from: currentAccount, value: fee });
        updateStatus('预约成功 | Appointment booked successfully');
        clearInputs(['bookDoctorAddress', 'appointmentDate']);
    } catch (error) {
        handleError('预约出错 | Error booking appointment', error);
    }
}

async function getMyMedicalRecord() {
    try {
        const record = await contract.methods.getMyMedicalRecord().call({ from: currentAccount });
        
        const medicalRecordElement = document.getElementById('medicalRecord');
        if (medicalRecordElement) {
            medicalRecordElement.innerHTML = `
                <div class="alert alert-info">
                    <p>年龄 | Age: ${record.age}</p>
                    <p>性别 | Gender: ${record.gender}</p>
                    <p>药物记录 | Medication Record: ${record.medicationRecord || '无 | None'}</p>
                </div>
            `;
        }
    } catch (error) {
        handleError('获取病历出错 | Error getting medical record', error);
    }
}

async function getMyAppointments() {
    try {
        const appointments = await contract.methods.getMyAppointments().call({ from: currentAccount });
        
        const appointmentsList = document.getElementById('patientAppointmentsList');
        if (!appointmentsList) {
            console.error('患者预约列表容器不存在 | Patient appointments list container does not exist');
            return;
        }
        
        if (appointments.length === 0) {
            appointmentsList.innerHTML = 
                '<div class="alert alert-info">没有预约 | No appointments</div>';
            return;
        }
        
        let html = '<div class="list-group">';
        
        for (let i = 0; i < appointments.length; i++) {
            const appointment = appointments[i];
            const date = new Date(appointment.date * 1000);
            const fee = web3.utils.fromWei(appointment.fee, 'ether');
            
            html += `
                <div class="list-group-item">
                    <h5>预约 #${i+1}</h5>
                    <p>医生 | Doctor: ${shortenAddress(appointment.doctor)}</p>
                    <p>日期 | Date: ${date.toLocaleString()}</p>
                    <p>费用 | Fee: ${fee} ETH</p>
                    <p>状态 | Status: ${appointment.completed ? '已完成 | Completed' : '未完成 | Pending'}</p>
                    ${appointment.completed ? `
                        <div>
                            <label class="form-label">给医生评分 | Rate Doctor (1-5):</label>
                            <div class="input-group mb-3">
                                <select class="form-select" id="rating-${i}">
                                    <option value="1">1 星 | 1 Star</option>
                                    <option value="2">2 星 | 2 Stars</option>
                                    <option value="3">3 星 | 3 Stars</option>
                                    <option value="4">4 星 | 4 Stars</option>
                                    <option value="5" selected>5 星 | 5 Stars</option>
                                </select>
                                <button class="btn btn-outline-primary" onclick="rateDoctor('${appointment.doctor}', ${i})">
                                    提交评分 | Submit Rating
                                </button>
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
        }
        
        html += '</div>';
        appointmentsList.innerHTML = html;
    } catch (error) {
        handleError('获取预约出错 | Error getting appointments', error);
    }
}
async function rateDoctor(doctorAddress, appointmentIndex) {
    const ratingSelect = document.getElementById(`rating-${appointmentIndex}`);
    if (!ratingSelect) return;
    
    const rating = ratingSelect.value;
    
    try {
        updateStatus('提交评分中... | Submitting rating...');
        await contract.methods.rateDoctor(doctorAddress, appointmentIndex, rating)
            .send({ from: currentAccount });
        updateStatus('评分提交成功 | Rating submitted successfully');
        getMyAppointments(); // 刷新预约列表 | Refresh appointment list
    } catch (error) {
        handleError('评分出错 | Error rating doctor', error);
    }
}
async function verifyDoctor() {
    const doctorAddress = document.getElementById('verifyDoctorAddress').value;
    
    if (!validateInputs([
        { value: doctorAddress, message: '请输入医生地址 | Please enter doctor address', isAddress: true }
    ])) return;
    
    try {
        const result = await contract.methods.verifyDoctor(doctorAddress).call();
        
        const verifyResult = document.getElementById('verifyResult');
        if (verifyResult) {
            verifyResult.innerHTML = result.isDoctor ? 
                `<div class="alert alert-success">
                    <p>这是一位真正的医生 | This is a valid doctor</p>
                    <p>专业 | Specialty: ${result.specialty}</p>
                    <p>学历 | Qualification: ${result.qualification}</p>
                    <p>预约费用 | Appointment Fee: ${web3.utils.fromWei(result.appointmentFee, 'ether')} ETH</p>
                </div>` :
                '<div class="alert alert-danger">这不是一位有效的医生 | This is not a valid doctor</div>';
        }
    } catch (error) {
        handleError('验证医生出错 | Error verifying doctor', error);
    }
}
// 辅助函数 | Helper functions
// 显示状态信息 | Display status message
function updateStatus(message, isError = false) {
    const statusElement = document.getElementById('statusMessage');
    if (statusElement) {
        statusElement.className = isError ? 'alert alert-danger' : 'alert alert-info';
        statusElement.textContent = message;
    }
}
// 处理错误 | Handle error
function handleError(message, error) {
    console.error(message, error);
    updateStatus(`${message}: ${error.message || 'Unknown error'}`, true);
}
// 验证输入 | Validate inputs
function validateInputs(inputs) {
    for (const input of inputs) {
        if (!input.value || input.value.trim() === '') {
            updateStatus(input.message, true);
            return false;
        }
        
        if (input.isAddress && !web3.utils.isAddress(input.value)) {
            updateStatus('无效的以太坊地址 | Invalid Ethereum address', true);
            return false;
        }
    }
    return true;
}
// 清除输入 | Clear inputs
function clearInputs(inputIds) {
    for (const id of inputIds) {
        const element = document.getElementById(id);
        if (element) {
            element.value = '';
        }
    }
}
// 显示部分 | Show section
function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
    }
}
// 隐藏部分 | Hide section
function hideSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('hidden');
    }
}
// 缩短地址显示 | Shorten address for display
function shortenAddress(address) {
    if (!address) return '';
    return address.substring(0, 6) + '...' + address.substring(address.length - 4);
}
// 将时间戳转换为日期字符串 | Convert timestamp to date string
function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
}
// 添加全局函数，使其可以从HTML中调用 | Add global functions to make them callable from HTML
window.copyToClipboard = copyToClipboard;
window.fillPatientAddress = fillPatientAddress;
window.completeAppointment = completeAppointment;
window.cancelAppointment = cancelAppointment;
window.fillDoctorAddress = fillDoctorAddress;
window.rateDoctor = rateDoctor;
