// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCzUgH4akcgenKq-NMrvHKoi94wOklesVU",
	authDomain: "comision-cb8a2.firebaseapp.com",
	projectId: "comision-cb8a2",
	storageBucket: "comision-cb8a2.appspot.com",
	messagingSenderId: "751256937857",
	appId: "1:751256937857:web:195755a7efa02547577480",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProducts = async () => {
	const productsCollectionRef = collection(db, "products");
	const snapshot = await getDocs(productsCollectionRef);
	const docsData = snapshot.docs.map((doc) => {
		return { ...doc.data(), id: doc.id };
	});
	return docsData;
};

export const getProductsByCategory = async (categoryToSearch) => {
	const productsCollectionRef = collection(db, "products");
	const queryCollection = query(
		productsCollectionRef,
		where("category", "==", categoryToSearch)
	);
	const snapshot = await getDocs(queryCollection);
	const docsData = snapshot.docs.map((doc) => {
		return { ...doc.data(), id: doc.id };
	});
	return docsData;
};

export const getOneProduct = async (idToSearch) => {
	const productsCollectionRef = collection(db, "products");
	const productRef = doc(productsCollectionRef, idToSearch);
	const snapshot = await getDoc(productRef);
	return { ...snapshot.data(), id: snapshot.id };
};

export const createBuyOrder = async (order) => {
	const ordersCollection = collection(db, "orders");
	const orderDoc = await addDoc(ordersCollection, order);
	return orderDoc.id;
};

export const exportMyData = (data) => {
	const productsCollectionRef = collection(db, "products");

	data.forEach((prod) => {
		addDoc(productsCollectionRef, prod).then((res) =>
			console.log("Documento creado:", res.id)
		);
	});
};
