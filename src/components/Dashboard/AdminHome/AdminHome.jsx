import { FaTruck, FaUsers } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend, Tooltip } from 'recharts';

// chart colour and data

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data = [
    {
        name: 'Laptop',
        sold: 40,
        price: 2200
    },
    {
        name: 'Phone',
        sold: 30,
        price: 2110
    },
    {
        name: 'Watch',
        sold: 20,
        price: 1000
    },
    {
        name: 'Tablet',
        sold: 27,
        price: 2320
    }
];



const AdminHome = () => {

    // custom shape for the bar chart

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="pb-10">
            <h2 className="text-3xl p-6">Hi, Welcome Back</h2>

            <div className="stats-vertical stats lg:stats-horizontal sm:ml-20 lg:ml-0 shadow">
                <div className="stat flex items-center">
                    <GiWallet className="text-5xl" />
                    <div>
                        <div className="stat-value">$100</div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                </div>
                {/* </div> */}

                <div className="stat flex items-center">
                    <FaUsers className="text-5xl" />
                    <div>
                        <div className="stat-value">4,20</div>
                        <div className="stat-title">Customers</div>
                    </div>
                </div>

                <div className="stat flex items-center">
                    <MdOutlineProductionQuantityLimits className="text-5xl" />
                    <div>
                        <div className="stat-value">1,20</div>
                        <div className="stat-title">Products</div>
                    </div>
                </div>

                <div className="stat flex items-center">
                    <FaTruck className="text-5xl" />
                    <div>
                        <div className="stat-value">1,00</div>
                        <div className="stat-title">Orders</div>
                    </div>
                </div>

            </div>
            {/* large device view */}
            <div className="flex lg:flex-row flex-col items-center  lg:justify-around pt-20">
                <div className="hidden md:block">
                    <BarChart
                        width={500}
                        height={370}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="sold" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                        <Legend />
                    </BarChart>

                </div>
                <div className="pl-10 hidden md:block">
                    <PieChart width={280} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={140}
                            fill="#8884d8"
                            dataKey="price"

                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </div>
            </div>
            {/* mobile device view */}
            <div className="flex md:hidden flex-col items-center justify-around pt-20">
                <div>
                    <BarChart
                        width={295}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="sold" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                        <Legend />
                    </BarChart>

                </div>
                <div>
                    <PieChart width={295} height={300}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="price"

                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;