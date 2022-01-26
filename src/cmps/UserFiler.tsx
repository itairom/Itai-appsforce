import { useForm } from '../services/customHooks';

type Props = { onSetFilter: any };

export default function UserFiler({ onSetFilter }: Props) {

    const [filterBy, handleChange] = useForm({
        email: '',
        name: '',
        location: '',
    }, onSetFilter)


    const { email, name, location } = filterBy
    return (
        <form className="user-filter" autoComplete="off" onSubmit={ev => ev.preventDefault()}>
            <label htmlFor="">Email:
                <input type="text" name="email" placeholder="" value={email} onChange={handleChange} />
            </label>
            <label htmlFor="">Name:
                <input type="text" name="name" placeholder="" value={name} onChange={handleChange} />
            </label>
            <label htmlFor="">Location:
                <input type="text" name="location" placeholder="" value={location} onChange={handleChange} />
            </label>
        </form>
    )

}
