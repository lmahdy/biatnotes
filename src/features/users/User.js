import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon component
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"; // Importing the icon
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook from react-router-dom

import { useGetUsersQuery } from './usersApiSlice'
import { memo } from 'react'

const User = ({ userId }) => {
    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[userId]
        }),
    })// Getting the user data from the store

    const navigate = useNavigate(); // Creating the navigate function for navigating to other routes

    if (user) {
        const handleEdit = () => navigate(`/dash/users/${userId}`); // Function to handle the edit button click and navigate to the edit page

        const userRolesString = user.roles.toString().replaceAll(',', ', '); // Converting the user roles array to a string

        const cellStatus = user.active ? '' : 'table__cell--inactive'; // Adding a CSS class based on the user's active status

        return (
            <tr className="table__row user">
                <td className={`table__cell ${cellStatus}`}>{user.username}</td> 
                <td className={`table__cell ${cellStatus}`}>{userRolesString}</td> 
                <td className={`table__cell ${cellStatus}`}>
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit} // Calling the handleEdit function on button click
                    >
                        <FontAwesomeIcon icon={faPenToSquare} /> 
                    </button>
                </td>
            </tr>
        );

    } else return null; // Return null if the user data is not available
};

const memoizedUser = memo(User)

export default memoizedUser // Export the User component
