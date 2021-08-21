import { Steps } from "antd";
import React, { useState} from "react";
import '../styles/registrarAsiento.css';
import FormRegistrarAsiento3 from "./FormRegisterSeatChooseSeat";
import FormRegisterSeatData from "./FormRegisterSeatData";
import FormRegisterSeatSchedule from "./FormRegisterSeatSchedule";
import ConfirmSeat from "./ConfirmSeat";

const { Step } = Steps;

const FormRegisterSeat = () => {

  const [current, setCurrent] = useState(0);

  const dataUserInfo ={ nameUser: "",
      phoneUser: "",
      identificationCard: "",
      scheduleMass: "",
      dayMass: "",
      seatMassUser: ""}

    const [dataUser, setDataUser] = useState(dataUserInfo);

    const handleFillUserData = (name, phone, identificationCard) => {
            setDataUser( prevState => {
                const NewValues = {...prevState};
                NewValues.nameUser = name;
                NewValues.phoneUser = phone;
                NewValues.identificationCard = identificationCard;
                return NewValues;
            })
    }

    const handleFillUserDataSchedule = (day, schedule) => {
        setDataUser( prevState => {
            const NewValues = {...prevState};
            NewValues.dayMass = day ;
            NewValues.scheduleMass = schedule;
            return NewValues;
        })
    }

    const handleFillUserDataSeat = (position ) => {
        setDataUser( prevState => {
            const NewValue = {...prevState};
            NewValue.seatMassUser = position;
            return NewValue;
        })
    }

    const handleNext = () => {
        setCurrent( current + 1);
    }

    const handlePrev = () => {
        setCurrent(current - 1);
    }

    const handleCancel = () =>  {
        setCurrent(0);
        setDataUser( dataUserInfo);
    }

    const steps = [
        {
            title: 'Datos de usuario',
            content: <FormRegisterSeatData current = {current}
                                           dataUser = { dataUser }
                                           onNext = { handleNext }
                                           onUpdateValues = { handleFillUserData } /> ,
        },
        {
            title: 'Seleccionar horario',
            content: <FormRegisterSeatSchedule current = {current}
                                               dataUser = { dataUser }
                                               onNext = { handleNext }
                                               onPrev = { handlePrev }
                                               onUpdateValues2 = { handleFillUserDataSchedule } />,
        },
        {
            title: 'Seleccionar puesto',
            content: <FormRegistrarAsiento3 current = {current}
                                            dataUser= { dataUser }
                                            onPrev = { handlePrev }
                                            onNext = { handleNext }
                                            onUpdateValues3 = { handleFillUserDataSeat }/>,
        },
        {
            title: 'Confirmar datos',
            content: <ConfirmSeat current = {current}
                                  dataUser = { dataUser }
                                  onPrev = { handlePrev }
                                  onCancel={ handleCancel }/>,
        },
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

export default FormRegisterSeat;

