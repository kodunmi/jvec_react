import { FormEvent, memo, useEffect, useState } from "react";
import {
  useMatch,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

interface IAccount {
  accountName: string;
  accountNumber: string;
  bank: string;
}

const WithdrawModal = () => {
  const navigate = useNavigate();
  const param = useParams();
  const location = useLocation();

  function onDismiss() {
    navigate(-1);
  }

  const [amount, setAmount] = useState<undefined | string>();
  const [number, setNumber] = useState<number | string>();
  const [name, setName] = useState("");
  const [bank, setBank] = useState("");

  const account = localStorage.getItem("account");
  useEffect(() => {
    console.log("account dey");

    if (account) {
      const accObj = JSON.parse(account) as IAccount;

      setBank(accObj.bank);
      setName(accObj.accountName);
      setNumber(accObj.accountNumber);
    }
  }, [account]);

  const StepOne = (
    setAmount: React.Dispatch<React.SetStateAction<string | undefined>>,
    amount: string | undefined,
    account: string | null
  ) => {
    return (
      <div>
        <div className="text-center">
          <h3 className="font-bold text-lg text-primary mt-5 text-center">
            Withdraw to Bank
          </h3>
          <p className="my-6">Available Balance: N10,000</p>
          <p>
            First withdrawal? You need to save your account details in settings
          </p>
        </div>
        <div className="w-full text-center">
          <input
            key={"wwee"}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            value={amount}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs my-4"
          />
          {/* ?amount=${amount} */}
          <button
            onClick={() =>
              account
                ? navigate(`/withdraw/2?amount=${amount}`, {
                    state: { backgroundLocation: location },
                  })
                : navigate(`/withdraw/3?amount=${amount}`, {
                    state: { backgroundLocation: location },
                  })
            }
            type="button"
            className="btn btn-primary w-full max-w-xs"
            disabled={amount ? +amount < 1000 : true}
          >
            {!account ? "Add New Account" : "Withdraw"}
          </button>
        </div>
      </div>
    );
  };

  const StepTwo = (
    number: string | number | undefined,
    setNumber: React.Dispatch<
      React.SetStateAction<string | number | undefined>
    >,

    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    bank: string,
    setBank: React.Dispatch<React.SetStateAction<string>>
  ) => {
    return (
      <div>
        <div className="text-center">
          <h3 className="font-bold text-lg text-primary mt-5 text-center">
            Withdraw to Bank
          </h3>
          <p className="my-5">Withdraw N10,000 to:</p>
        </div>
        <form className="w-full text-center">
          <input
            key={"www"}
            required
            disabled
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            type="number"
            placeholder="Account Number"
            className="input input-bordered w-full max-w-xs my-2"
          />
          <input
            required
            disabled
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Account Name"
            className="input input-bordered w-full max-w-xs my-2"
          />
          <select
            required
            disabled
            onChange={(e) => setBank(e.target.value)}
            value={bank}
            placeholder="Bank"
            className="select select-bordered w-full max-w-xs my-2"
          >
            <option>Select</option>
            <option value="Zenith">Zenith</option>
            <option value="First Bank">First Bank</option>
            <option value="Zenith">Zenith</option>
            <option value="First Bank">First Bank</option>
            <option value="Zenith">Zenith</option>
            <option value="First Bank">First Bank</option>
            <option value="Zenith">Zenith</option>
            <option value="First Bank">First Bank</option>
            <option value="Zenith">Zenith</option>
            <option value="First Bank">First Bank</option>
          </select>
          <button
            onClick={() =>
              navigate(`/withdraw/4`, {
                state: { backgroundLocation: location },
              })
            }
            type="button"
            className="btn btn-primary w-full max-w-xs mt-4"
          >
            Process
          </button>
          <button
            type="button"
            onClick={() =>
              navigate(`/withdraw/3`, {
                state: { backgroundLocation: location },
              })
            }
            className="btn btn-primary btn-outline w-full max-w-xs mt-1"
          >
            change Account
          </button>
        </form>
      </div>
    );
  };
  const StepThree = (
    account: string | null,
    number: string | number | undefined,
    setNumber: React.Dispatch<
      React.SetStateAction<string | number | undefined>
    >,

    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    bank: string,
    setBank: React.Dispatch<React.SetStateAction<string>>
  ) => {
    console.log(number, bank, name);

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();

      localStorage.setItem(
        "account",
        JSON.stringify({ accountNumber: number, accountName: name, bank: bank })
      );

      navigate(`/withdraw/2?amount=${amount}`, {
        state: { backgroundLocation: location },
      });

      console.log(number, name, bank);
    };
    return (
      <div>
        <div className="text-center">
          <h3 className="font-bold text-lg text-primary mt-5 text-center">
            Edit account
          </h3>
          <p className="my-5">
            If you have not added an account,
            <br /> fill the form and save
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full text-center">
          <input
            required
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            type="number"
            placeholder="Account Number"
            className="input input-bordered w-full max-w-xs my-2"
          />
          <input
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Account Name"
            className="input input-bordered w-full max-w-xs my-2"
          />
          <select
            required
            onChange={(e) => setBank(e.target.value)}
            value={bank}
            placeholder="Bank"
            className="select select-bordered w-full max-w-xs my-2"
          >
            <option>Select</option>
            <option value="Zenith">Zenith</option>
            <option value="First Bank">First Bank</option>
            <option value="Zenith">Zenith</option>
            <option value="First Bank">First Bank</option>
            <option value="Zenith">Zenith</option>
            <option value="First Bank">First Bank</option>
            <option value="Zenith">Zenith</option>
            <option value="First Bank">First Bank</option>
            <option value="Zenith">Zenith</option>
            <option value="First Bank">First Bank</option>
          </select>
          <button
            // onClick={() => navigate(`/withdraw/2`)}
            type="submit"
            className="btn btn-primary w-full max-w-xs mt-4"
          >
            Save
          </button>
        </form>
      </div>
    );
  };
  const StepFour = () => {
    return (
      <div>
        <div className="text-center flex justify-center items-center flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="123"
            height="122"
            viewBox="0 0 123 122"
            fill="none"
          >
            <mask
              id="mask0_732_1803"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="11"
              y="8"
              width="101"
              height="106"
            >
              <path
                d="M61.4998 10.1667L74.8512 19.9064L91.3797 19.8759L96.4554 35.6037L109.845 45.2926L104.708 61.0001L109.845 76.7076L96.4554 86.3964L91.3797 102.124L74.8512 102.094L61.4998 111.833L48.1485 102.094L31.62 102.124L26.5443 86.3964L13.1548 76.7076L18.2915 61.0001L13.1548 45.2926L26.5443 35.6037L31.62 19.8759L48.1485 19.9064L61.4998 10.1667Z"
                fill="white"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M43.708 61.0001L56.4163 73.7084L81.833 48.2917"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </mask>
            <g mask="url(#mask0_732_1803)">
              <path d="M0.5 0H122.5V122H0.5V0Z" fill="#27BF1A" />
            </g>
          </svg>
          <p className="my-4">N10,000 was successfully sent to your account </p>
        </div>
        <div className="w-full text-center">
          <button
            onClick={() => navigate(`/home`)}
            type="button"
            className="btn btn-primary w-full btn-sm max-w-xs"
          >
            Back To Dashboard
          </button>
        </div>
      </div>
    );
  };
  return (
    <div>
      <button
        type="button"
        onClick={() => onDismiss()}
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      >
        ✕
      </button>

      <>
        {(() => {
          switch (Number(param.step)) {
            case 1:
              return StepOne(setAmount, amount, account);
            case 2:
              return StepTwo(number, setNumber, name, setName, bank, setBank);
            case 3:
              return StepThree(
                account,
                number,
                setNumber,
                name,
                setName,
                bank,
                setBank
              );
            case 4:
              return StepFour();
            default:
              return null;
          }
        })()}
      </>
    </div>
  );
};

export default memo(WithdrawModal);
