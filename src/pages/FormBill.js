import React, {useState} from 'react';
import { Steps} from "antd";
import '../styles/bill.css';
import UserData from "../components/UserData";

const { Step } = Steps;

const FormBill = () => {
    const [current, SetCurrent] = useState(0);
    const [dataBill, SetDataBill] = useState({
        nameUser: "",
        emailUser: "",
        phoneUser: "",
        addressUser: "",
    });

    const handleAddUserData = (name,email,phone,address) => {
        SetDataBill( prevState => {
            const newUserDataBill = {...prevState};
            newUserDataBill.nameUser = name;
            newUserDataBill.emailUser = email;
            newUserDataBill.phoneUser = phone;
            newUserDataBill.addressUser = address;
            return newUserDataBill;
        })
        
    }
    const handleNext= () => {
        SetCurrent( current + 1);
    }

    const handlePrev = () => {
        SetCurrent(current - 1);
    }
    const steps = [
        
        {
            title: 'Datos de usuario',
            content: <UserData current = {current}
                               dataBill= { dataBill}
                               onNext = { handleNext }
                               onPrev = { handlePrev }
                               onUpdateValues= { handleAddUserData } /> ,
        }
    ];

    return (
        <div>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
        </div>

    );
}
export default FormBill;